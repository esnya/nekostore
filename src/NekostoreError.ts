export default class NekostoreError extends Error {
  constructor(code: string, message: string, original?: Error) {
    super(`${message}:${code}`);

    this.code = code;
    this.message = message;
    this.original = original;
  }

  readonly code: string;
  readonly message: string;
  readonly original?: Error;

  get stack(): string | undefined {
    return (this.original && this.original.stack) || this.stack;
  }
}
