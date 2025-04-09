import { describe, expect, it } from 'vitest';
import { calcDuration, pluralize } from './index';

describe('pluralize', () => {
  it('should pluralize correctly', async () => {
    expect(pluralize({ count: 2, text: 'Apple' })).toBe('Apples');
  });

  it('should not pluralize when one count', async () => {
    expect(pluralize({ count: 1, text: 'Orange' })).toBe('Orange');
  });
});

describe('calcDuration', () => {
  [
    {
      testText: 'less than one month',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2025-01-02T00:00:00.000Z'),
      expected: '<1 month',
    },
    {
      testText: 'one month',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2025-02-01T00:00:00.000Z'),
      expected: '1 month',
    },
    {
      testText: 'more than one month',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2025-12-01T00:00:00.000Z'),
      expected: '11 months',
    },
    {
      testText: 'one year',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2026-01-01T00:00:00.000Z'),
      expected: '1 year',
    },
    {
      testText: 'one year and one month',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2026-02-01T00:00:00.000Z'),
      expected: '1 year 1 month',
    },
    {
      testText: 'one year and more than one month',
      fr: new Date('2023-10-01T00:00:00.000Z'),
      to: new Date('2025-02-01T00:00:00.000Z'),
      expected: '1 year 4 months',
    },
    {
      testText: 'more than one year and zero months',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2030-01-01T00:00:00.000Z'),
      expected: '5 years',
    },
    {
      testText: 'more than one year and one month',
      fr: new Date('2025-01-01T00:00:00.000Z'),
      to: new Date('2027-02-01T00:00:00.000Z'),
      expected: '2 years 1 month',
    },
    {
      testText: 'more than one year and more than one month',
      fr: new Date('2025-11-01T00:00:00.000Z'),
      to: new Date('2029-08-01T00:00:00.000Z'),
      expected: '3 years 9 months',
    },
  ].forEach(({ fr: from, to, expected, testText }) => {
    it(`calculates duration for ${testText}`, async () => {
      expect(calcDuration({ from, to })).toBe(expected);
    });
  });
});
