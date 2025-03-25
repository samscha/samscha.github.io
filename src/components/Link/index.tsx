interface Props {
  classNames?: string[];
  href: string;
  text: string;
  title: string;
}

export const Link = ({ classNames, href, text, title }: Props) => {
  const className = classNames?.join(' ');

  return (
    <div className={className}>
      <a href={href} title={title} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </div>
  );
};
