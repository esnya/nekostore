import AggregationOperator from '../AggregationOperator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Data = Record<string, any>;

export interface DataWithId extends Data {
  id: string;
}

/**
 * Interface for data store implementation.
 */
export default interface Store {
  /**
   * Aggregate
   * @param collectionId
   * @param operators Array of aggregation operators like MongoDB.
   */
  find(
    collectionId: string,
    operators: AggregationOperator[],
  ): Promise<DataWithId[]>;

  /**
   * Add a new document.
   * @param collectionId
   * @param data
   * @returns ID of added document.
   */
  add(collectionId: string, data: Data): Promise<string>;

  /**
   * Get a document.
   * @param collectionId
   * @param id
   * @returns Document data if exists, undefined otherwise
   */
  get(collectionId: string, id: string): Promise<Data | undefined>;

  /**
   * Set data a document.
   * @param collectionId
   * @param id
   * @param data
   */
  set(collectionId: string, id: string, data: Data): Promise<void>;

  /**
   * Update a document and merge deeply.
   * @param collectionId
   * @param id
   * @param data
   */
  update(collectionId: string, id: string, data: Data): Promise<void>;

  /**
   * Delete a document.
   * @param collectionId
   * @param id
   */
  delete(collectionId: string, id: string): Promise<void>;
}
