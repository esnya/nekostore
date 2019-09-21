export const logger = {
  inExample: false,
  inTask: false,
  example(name: string): void {
    if (this.inExample) {
      if (this.inTask) {
        this.inTask = false;
        console.groupEnd();
      }
      console.groupEnd();
    }
    this.inExample = true;
    console.group('Example', name);
  },

  task(name: string): void {
    if (this.inTask) {
      console.groupEnd();
    }
    this.inTask = true;
    console.group(name);
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result(...args: any[]): void {
    console.log(...args);
  },
};

export function catchError(fn: () => Promise<void>): Promise<void> {
  return fn().then(
    () => {},
    error => {
      console.error(error);
      process.exit(1);
    },
  );
}
