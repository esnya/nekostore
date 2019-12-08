export default class InvalidPathError extends TypeError {
  constructor(readonly path: string, readonly type: 'Document' | 'Collection') {
    super(`${path} is not valid path of ${type}`);
  }
}
