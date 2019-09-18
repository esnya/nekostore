import QueryDescriptor from './QueryDescriptor';
import { ChangeType } from '../../core/DocumentChange';
import { DocumentSnapshotData } from './SocketDocumentSnapshot';

export interface QuerySnapshotData<T> {
  docs: {
    path: string;
    change: {
      type: ChangeType;
      newIndex: number;
      oldIndex: number;
    };
    snapshot?: DocumentSnapshotData<T>;
  }[];
}

export default interface Actions {
  queryGet<T extends {}>(
    path: string,
    descriptors: QueryDescriptor[],
  ): Promise<QuerySnapshotData<T>>;
  querySubscribe(
    path: string,
    descriptors: QueryDescriptor[],
  ): Promise<{ subscriberId: string }>;

  collectionAdd<T extends {}>(path: string, data: T): Promise<{ id: string }>;

  documentGet<T extends {}>(
    path: string,
  ): Promise<{ snapshot?: DocumentSnapshotData<T> }>;
  documentSet<T extends {}>(path: string, data: T): Promise<void>;
  documentUpdate<T extends {}>(path: string, data: Partial<T>): Promise<void>;
  documentDelete<T extends {}>(path: string): Promise<void>;
  documentSubscribe<T extends {}>(
    path: string,
  ): Promise<{ subscriberId: string }>;

  unsubscribe(subscriberId: string): Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ParameterTypes<T> = T extends (...args: infer T) => any ? T : never;
type Unpromise<T> = T extends Promise<infer U> ? U : T;

export type ActionNames = keyof Actions;
export type ActionArgsOf<Action extends ActionNames> = ParameterTypes<
  Actions[Action]
>;
export type ActionReturnTypeOf<Action extends ActionNames> = Unpromise<
  ReturnType<Actions[Action]>
>;
