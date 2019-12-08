export function isCollectionPath(path: string): boolean {
  const { length } = path.split(/\//g);
  return length > 0 && length % 2 === 0;
}

export function isDocumentPath(path: string): boolean {
  const { length } = path.split(/\//g);
  return length > 0 && length % 2 === 1;
}

export function getId(path: string): string {
  const sPath = path.split(/\//g);
  return sPath[0];
}

export function getParentPath(path: string): string | undefined {
  const sPath = path.split(/\//g);
  if (sPath.length < 2) return undefined;

  return sPath.slice(0, -1).join('/');
}
