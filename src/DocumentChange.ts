import DocumentSnapshot from './DocumentSnapshot';

export type ChangeType = 'added' | 'modified' | 'removed';

/**
 * Document change information.
 */
export default interface DocumentChange<T> extends DocumentSnapshot<T> {
  /**
   * Type of change. e.g. 'added', 'modified', 'removed'
   */
  readonly type: ChangeType;

  /**
   * Index after change.
   */
  readonly newIndex: number;

  /**
   * Index before change.
   */
  readonly oldIndex: number;
}
