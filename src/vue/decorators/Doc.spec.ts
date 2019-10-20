import { expect } from 'chai';
import Vue from 'vue';
import Component from 'vue-class-component';
import DocumentReference from '../../DocumentReference';
import Nekostore from '../../Nekostore';
import BasicDriver from '../../driver/basic';
import Doc from './Doc';

function sleep(ms = 50): Promise<void> {
  return new Promise((resolve): void => {
    setTimeout(resolve, ms);
  });
}

interface Data {
  foo: string;
  bar?: number;
}

describe('Vue decorators Doc', () => {
  const nekostore = new Nekostore(new BasicDriver());
  const c1 = nekostore.collection<Data>('c1');
  let created = false;

  @Component
  class TestComponent extends Vue {
    id: string | null = null;

    get docRef(): DocumentReference<Data> | null {
      return this.id ? c1.doc(this.id) : null;
    }

    @Doc<Data, TestComponent>('docRef') doc!: Data | null;

    created(): void {
      created = true;
    }
  }
  let node: TestComponent;

  it('instantiated', () => {
    node = new TestComponent();

    expect(node.docRef).is.null;
    node.id = 'd1';
    expect(node.docRef).is.not.null;
    if (!node.docRef) throw new TypeError();
    expect(node.docRef.path).equal('c1/d1');
  });

  it('initializes', () => {
    expect(created).is.true;
    expect(node.doc).is.null;
  });

  let d1: DocumentReference<Data>;
  before(() => {
    d1 = c1.doc('d1');
  });

  it('reflects set', async () => {
    await d1.set({ foo: 'a', bar: 0 });
    after(() => d1.delete());
    expect(node.doc).to.deep.equal({ foo: 'a', bar: 0 });
  });

  it('reflects update', async () => {
    await d1.update({ bar: 1 });
    expect(node.doc).to.deep.equal({ foo: 'a', bar: 1 });
  });

  it('reflects delete', async () => {
    await d1.delete();
    expect(node.doc).to.null;
  });

  it('updates ref', async () => {
    await d1.set({ foo: 'b' });
    node.id = null;
    await sleep();
    expect(node.docRef).to.null;
    expect(node.doc).to.null;
  });

  it('unsubscribes', async () => {
    await d1.update({ bar: 2 });
    await sleep();
    expect(node.doc).to.null;
  });

  let d2: DocumentReference<Data>;
  before(() => {
    d2 = c1.doc('d2');
  });

  it('reflects new ref', async () => {
    await d2.set({ foo: 'c' });
    after(() => d2.delete());
    node.id = 'd2';
    await sleep();
    expect(node.doc).to.deep.equal({ foo: 'c' });
  });
});
