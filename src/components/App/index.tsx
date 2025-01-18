import './index.css';

interface Props {
  renderContent: React.ReactNode;
}

export const App = ({ renderContent }: Props) => {
  return <>{renderContent}</>;
};
