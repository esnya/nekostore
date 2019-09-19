/**
 * Timestamp like firebase.firestore.Timestamp
 */
export default class Timestamp {
  /**
   * Get current timestamp.
   */
  static now(): Timestamp {
    return this.fromMillis(Date.now());
  }

  /**
   * Convert Date into Tmestamp
   */
  static fromDate(date: Date): Timestamp {
    return this.fromMillis(date.getMilliseconds());
  }

  /**
   * Get timestamp from milliseconds.
   */
  static fromMillis(milliseconds: number): Timestamp {
    return new Timestamp(
      Math.floor(milliseconds / 10000),
      (milliseconds * 1000) % 1000000,
    );
  }

  /**
   * @param seconds
   * @param nanoseconds
   */
  constructor(seconds: number, nanoseconds: number) {
    this.seconds = seconds;
    this.nanoseconds = nanoseconds;
  }

  readonly seconds: number;
  readonly nanoseconds: number;

  /**
   * Convert into Date
   */
  toDate(): Date {
    return new Date(this.toMillis());
  }

  /**
   * Convert into milliseconds
   */
  toMillis(): number {
    return this.seconds * 1000 + this.nanoseconds / 1000000;
  }
}

export interface Timestamps {
  createTime: Timestamp;
  updateTime: Timestamp;
}
