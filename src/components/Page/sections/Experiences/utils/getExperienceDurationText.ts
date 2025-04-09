import * as utils from '../../../../../utils';

interface Props {
  from: string;
  to: string;
}

export const getExperienceDurationText = ({
  from: monthYearFrom,
  to: monthYearTo,
}: Props) => {
  const { from, to } = formatFromAndToMonthYear({ monthYearFrom, monthYearTo });

  return utils.calcDuration({ from, to });
};

export const getCurrentMonthYear = () => {
  const now = new Date();

  const year = now.getUTCFullYear();
  const month = now.getUTCMonth() + 1; // months zero-indexed

  return `${month}/${year}`;
};

export const formatFromAndToMonthYear = ({
  monthYearFrom,
  monthYearTo,
}: {
  monthYearFrom: string;
  monthYearTo: string;
}) => {
  const [monthFrom, yearFrom] = monthYearFrom.split('/');
  const [monthTo, yearTo] = monthYearTo.split('/');

  const paddedMonthFrom = monthFrom.padStart(2, '0');
  const paddedMonthTo = monthTo.padStart(2, '0');

  // use first day of month
  const from = new Date(`${yearFrom}-${paddedMonthFrom}-01T00:00:00.000Z`);
  const to = new Date(`${yearTo}-${paddedMonthTo}-01T00:00:00.000Z`);

  return {
    from,
    to,
  };
};
