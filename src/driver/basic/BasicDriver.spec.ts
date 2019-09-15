import { testDriver } from '../../../tests/driver';
import BasicDriver from './BasicDriver';

describe('BasicDriver', () => {
  it('is driver', () => {
    testDriver(new BasicDriver());
  });
});
