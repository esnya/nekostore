import DocumentSnapshot from './DocumentSnapshot';

export type ChangeType = 'added' | 'modified' | 'removed';

export default interface DocumentChange<T> extends DocumentSnapshot<T> {
  readonly type: ChangeType;
  readonly newIndex: number;
  readonly oldIndex: number;
}
