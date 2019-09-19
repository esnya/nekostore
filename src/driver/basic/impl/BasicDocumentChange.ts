import DocumentChange, { ChangeType } from '../../../DocumentChange';
import BasicDocumentSnapsnot from './BasicDocumentSnapshot';
import BasicDocumentReference from './BasicDocumentReference';
import { Data } from '../../../store/Store';

export default class BasicDocumentChange<T> extends BasicDocumentSnapsnot<T>
  implements DocumentChange<T> {
  constructor(
    ref: BasicDocumentReference<T>,
    change: {
      type: ChangeType;
      newIndex: number;
      oldIndex: number;
    },
    snapshot?: Data,
  ) {
    super(ref, snapshot);

    this.type = change.type;
    this.newIndex = change.newIndex;
    this.oldIndex = change.oldIndex;
  }

  readonly type: ChangeType;
  readonly newIndex: number;
  readonly oldIndex: number;
}
