import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  formatFromAndToMonthYear,
  getCurrentMonthYear,
  getExperienceDurationText,
  getTotalExperienceDurationText,
} from './index';

describe('getExperienceDurationText', () => {
  it('gets experience duration text correctly', async () => {
    expect(
      getExperienceDurationText({
        from: '1/2025',
        to: '4/2026',
      })
    ).toBe('1 year 3 months');
  });
});

describe('getCurrentMonthYear', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('gets current month year correctly', async () => {
    const date = new Date('2025-04-01T00:00:00.000Z');
    vi.setSystemTime(date);

    expect(getCurrentMonthYear()).toBe('4/2025');
  });
});

describe('formatFromAndToMonthYear', () => {
  it('formats from and to month years correctly', async () => {
    expect(
      formatFromAndToMonthYear({
        monthYearFrom: '11/2024',
        monthYearTo: '9/2025',
      })
    ).toMatchObject({
      from: new Date('2024-11-01T00:00:00.000Z'),
      to: new Date('2025-09-01T00:00:00.000Z'),
    });
  });
});

describe('getTotalExperienceDurationText', () => {
  [
    {
      testText: 'less than one month',
      months: 0,
      expected: '<1 month',
    },
    {
      testText: 'one month',
      months: 1,
      expected: '1 month',
    },
    {
      testText: 'less than twelve months',
      months: 11,
      expected: '11 months',
    },
    {
      testText: 'one year',
      months: 12,
      expected: '1 year',
    },
    {
      testText: 'one year and months',
      months: 13,
      expected: '1+ year',
    },
    {
      testText: 'exactly more than one year',
      months: 36,
      expected: '3 years',
    },
    {
      testText: 'more than one year and months',
      months: 37,
      expected: '3+ years',
    },
  ].forEach(({ testText, months, expected }) => {
    it(`gets total experience duration when ${testText}`, async () => {
      expect(getTotalExperienceDurationText({ months })).toBe(expected);
    });
  });
});
