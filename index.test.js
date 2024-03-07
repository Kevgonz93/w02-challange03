import { arrayLength } from './index.js';

describe('length', () => {
  test('it should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});

/*

TEST 02
describe('push', () =>{
test('it should be [1,2,3,4] when argument is [1,2][3,4]', () => {
  const x =[1,2][3,4]
  const expected =
}); 

*/
