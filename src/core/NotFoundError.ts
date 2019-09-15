import NekostoreError from './NekostoreError';

export default class NotFoundError extends NekostoreError {
  constructor(message: string, original?: Error) {
    super('not-found', message, original);
  }
}
