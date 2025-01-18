import './index.css';

interface Props {
  classNames?: string[];
  size?: '2x';
}

export const Divider = ({ classNames: classNamesProp, size }: Props) => {
  const classNames = ['divider'].concat(classNamesProp ?? []);

  switch (size) {
    case '2x':
    default:
      classNames.push('md');
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="divider-line" />
    </div>
  );
};
