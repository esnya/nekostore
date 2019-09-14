import DocumentSnapshot from './DocumentSnapshot';

export default interface DocumentChange<T> extends DocumentSnapshot<T> {
  readonly type: 'added' | 'modified' | 'removed';
  readonly newIndex: number;
  readonly oldIndex: number;
}
