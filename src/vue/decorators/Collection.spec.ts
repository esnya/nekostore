import { expect } from 'chai';
import Vue from 'vue';
import Component from 'vue-class-component';
import Nekostore from '../../Nekostore';
import BasicDriver from '../../driver/basic';
import Collection from './Collection';
import Query from '../../Query';
import { NonEmptyDocumentSnapshot } from '../../DocumentSnapshot';
import DocumentReference from '../../DocumentReference';

function sleep(ms = 50): Promise<void> {
  return new Promise((resolve): void => {
    setTimeout(resolve, ms);
  });
}

interface Data {
  foo: string;
  bar?: number;
}

describe('Vue decorators Collection', () => {
  const nekostore = new Nekostore(new BasicDriver());
  const c1 = nekostore.collection<Data>('c1');
  let created = false;

  @Component
  class TestComponent extends Vue {
    ref: Query<Data> | null = null;

    @Collection<Data, TestComponent>('ref') docs!:
      | NonEmptyDocumentSnapshot<Data>[]
      | null;

    created(): void {
      created = true;
    }
  }
  let node: TestComponent;

  it('initializes', () => {
    node = new TestComponent();
    expect(created).is.true;
    expect(node.docs).is.null;
  });

  after(async () => {
    const { docs } = await c1.get();
    await Promise.all(docs.map(doc => doc.ref.delete()));
  });

  let d2: DocumentReference<Data>;
  it('sets docs', async () => {
    await c1.add({ foo: 'a' });
    d2 = await c1.add({ foo: 'b' });
    await c1.add({ foo: 'c' });
    node.ref = c1;
    await sleep();
    if (!node.docs) throw new TypeError();
    expect(node.docs.map(doc => doc.data.foo)).to.deep.equal(['a', 'b', 'c']);
  });

  it('reflects added', async () => {
    await c1.add({ foo: 'd' });
    if (!node.docs) throw new TypeError();
    expect(node.docs.map(doc => doc.data.foo)).to.deep.equal([
      'a',
      'b',
      'c',
      'd',
    ]);
  });

  it('reflects updated', async () => {
    await d2.update({ foo: 'e' });
    if (!node.docs) throw new TypeError();
    expect(node.docs.map(doc => doc.data.foo)).to.deep.equal([
      'a',
      'e',
      'c',
      'd',
    ]);
  });

  it('unsubscribes and sets null', async () => {
    node.ref = null;
    await sleep();
    expect(node.docs).is.null;
    await c1.add({ foo: 'd' });
    await c1.add({ foo: 'e' });
    expect(node.docs).is.null;
  });
});
