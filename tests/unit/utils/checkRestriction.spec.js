import { checkRestriction } from '@/utils/checkRestriction';

const POSITIVE_TEST_VALUE = 'password';
const NEGATIVE_TEST_VALUE = '';

const restrictions = 
    [ 
        ['required', true],
        ['minLength', 3],
        ['isEqual', { key: 'key', value: { key: POSITIVE_TEST_VALUE } }]
    ];

describe('checkRestriction', () => {
  it('returns true if condition is met', () => {
    expect(restrictions.every((res) => checkRestriction(res, POSITIVE_TEST_VALUE))).toBe(true);
  });

  it('returns false if condition isnt met', () => {
    expect(restrictions.some((res) => checkRestriction(res, NEGATIVE_TEST_VALUE))).toBe(false);
  })
});
