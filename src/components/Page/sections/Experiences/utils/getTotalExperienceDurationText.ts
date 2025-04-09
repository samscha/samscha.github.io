import * as utils from '../../../../../utils';

interface Props {
  months: number;
}

export const getTotalExperienceDurationText = ({ months }: Props) => {
  if (months <= 0) {
    return '<1 month';
  }

  if (months < 12) {
    return `${months} month${utils.s(months)}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months - years * 12;

  const moreThanText = remainingMonths > 0 ? '+' : '';

  return `${years}${moreThanText} year${utils.s(years)}`;
};

export const getTotalMonths = utils.getTotalMonths;
