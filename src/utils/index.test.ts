import { describe, expect, it } from 'vitest';
import { calcDuration, s } from './index';

describe('s', () => {
  it('should return s when greater than one', async () => {
    expect(s(2)).toBe('s');
  });

  it('should return empty string when one', async () => {
    expect(s(1)).toBe('');
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
