import BasicDriver from './BasicDriver';
import testDriver from '../Driver.spec';
import SecurityRule from './SecurityRule';

const rule: SecurityRule = {
  rules: [
    {
      path: '/private/readonly',
      read: true,
    },
    {
      path: '/private/writeonly',
      write: true,
    },
    {
      path: '/private/:uid',
      read: {
        $expr: { $eq: ['$uid', '$request.auth.uid'] },
      },
      write: {
        $expr: { $eq: ['$uid', '$request.auth.uid'] },
      },
    },
    { path: '/private/(.*)', read: false, write: false },
    { path: '(.*)', read: true, write: true },
  ],
};

describe('BasicDriver', () => {
  testDriver(async () => {
    const driver = new BasicDriver({ rule });
    driver.user = {
      uid: 'alice',
    };
    return driver;
  });
});
