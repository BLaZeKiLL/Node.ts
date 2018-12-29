process.env.NODE_ENV = 'test';

import { assert } from 'chai';
import { App } from '../../src/App/app';

const app = new App(3000, 'NODETS');

describe('App', () => {
  describe('getLocalUrl()', () => {
    it('getLocalUrl() should return http://localhost:3000/', () => {
      assert.equal(app.getLocalUrl(), 'http://localhost:3000/');
    });
  });
});
