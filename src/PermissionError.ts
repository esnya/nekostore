import NekostoreError from './NekostoreError';

export default class PermissionError extends NekostoreError {
  constructor(path: string, grant: 'read' | 'write') {
    super('permisson', `${grant} for ${path} is not allowed`);
  }
}
