export * from './calcDuration';

export const pluralize = ({
  count,
  text,
}: {
  count: number;
  text: string;
  noCountText: string;
}) => {
  if (count > 1) {
    return `${text}s`;
  }

  return text;
};
