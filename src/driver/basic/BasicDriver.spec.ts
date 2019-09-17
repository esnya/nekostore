import BasicDriver from './BasicDriver';
import testDriver from '../Driver.spec';

describe('BasicDriver', () => {
  testDriver(BasicDriver, async () => []);
});
