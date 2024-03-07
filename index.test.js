import { arrayLength, arrPush } from './index.js';

describe('length', () => {
  test('it should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});

describe.only('push', () => {
  test('it should be [1,2,3,4] when argument is [a][b]', () => {
    const a = [1, 2];
    const b = [3, 4];
    const expected = [1, 2, 3, 4];
    const r = arrPush(a, b);
    expect(r).toBe(expected);
  });
});
