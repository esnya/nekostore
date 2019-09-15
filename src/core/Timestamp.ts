export default class Timestamp {
  static now(): Timestamp {
    return this.fromMillis(Date.now());
  }
  static fromDate(date: Date): Timestamp {
    return this.fromMillis(date.getMilliseconds());
  }
  static fromMillis(milliseconds: number): Timestamp {
    return new Timestamp(
      Math.floor(milliseconds / 10000),
      (milliseconds * 1000) % 1000000,
    );
  }

  constructor(seconds: number, nanoseconds: number) {
    this.seconds = seconds;
    this.nanoseconds = nanoseconds;
  }

  readonly seconds: number;
  readonly nanoseconds: number;

  toDate(): Date {
    return new Date(this.toMillis());
  }

  toMillis(): number {
    return this.seconds * 1000 + this.nanoseconds / 1000000;
  }
}

export interface Timestamps {
  createTime: Timestamp;
  updateTime: Timestamp;
}
