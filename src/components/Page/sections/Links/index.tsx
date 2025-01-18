import { Link } from '../../../';
import { Props as PageProps } from '../../';
import './index.css';

interface Props extends Required<Pick<PageProps, 'links'>> {}

export const Links = ({ links }: Props) => {
  return (
    <div className="links">
      {links.map((link, idx) => {
        return (
          <Link
            key={`${JSON.stringify(link)}-${idx}`}
            {...link}
            classNames={['link']}
          />
        );
      })}
    </div>
  );
};
