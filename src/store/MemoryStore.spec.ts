import MemoryStore from './MemoryStore';
import testStore from './Store.spec';

describe('MemoryStore', () => {
  testStore(MemoryStore);
});
