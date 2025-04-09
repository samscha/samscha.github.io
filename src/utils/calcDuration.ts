interface Props {
  from: Date;
  to: Date;
}

export const calcDuration = ({ from, to }: Props) => {
  const totalMonths = getTotalMonths({ from, to });

  const isLessThanOneYear = totalMonths < 12;

  if (isLessThanOneYear && totalMonths <= 0) {
    return '<1 month';
  }
  if (isLessThanOneYear) {
    return `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths - years * 12;

  const yearsText = `year${years > 1 ? 's' : ''}`;

  if (months === 0) {
    return `${years} ${yearsText}`;
  }

  const monthsText = `month${months > 1 ? 's' : ''}`;

  return `${years} ${yearsText} ${months} ${monthsText}`;
};

export const getTotalMonths = ({ from, to }: Props) => {
  const monthsFromYears = (to.getUTCFullYear() - from.getUTCFullYear()) * 12;

  return monthsFromYears + to.getUTCMonth() - from.getUTCMonth();
};
