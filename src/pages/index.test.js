import * as index from './index';

describe(`pages`, function () {
  const { About, Contact, Four04, Home } = index;
  it(`should export the correct pages`, function () {
    expect(About).toBeDefined();
    expect(Contact).toBeDefined();
    expect(Four04).toBeDefined();
    expect(Home).toBeDefined();
  });
});
