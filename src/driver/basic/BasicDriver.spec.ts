import BasicDriver from './BasicDriver';
import testDriver from '../Driver.spec';

describe('BasicDriver', () => {
  testDriver(async () => new BasicDriver());
});
