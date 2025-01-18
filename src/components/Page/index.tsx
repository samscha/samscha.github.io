import { Divider } from '../';
import {
  Links,
  Experiences,
  TechnicalSkills,
  Projects,
  Educations,
} from './sections';
import './index.css';

export interface Props {
  links?: {
    href: string;
    text: string;
    title: string;
  }[];

  technicalSkills?: {
    technicalSkill: 'Languages' | 'Frameworks' | 'Developer Tools';
    skills: string[];
  }[];

  experiences?: {
    title: string;
    company: string;
    start: string;
    end: string | null;
    present: boolean;
    location: string;
    descriptions: string[];
  }[];

  projects?: {
    name: string;
    tools: string[];
    start: string;
    end: string | null;
    present: boolean;
    descriptions: string[];
  }[];

  educations?: {
    institution: string;
    focus: string;
    location: string;
    start: string;
    end: string | null;
    present: boolean;
  }[];
}

export const Page = ({
  links,
  technicalSkills,
  experiences,
  projects,
  educations,
}: Props) => {
  const renderLinks = links && !!links.length;
  const renderSkills =
    technicalSkills &&
    !!technicalSkills.length &&
    technicalSkills.some(({ skills }) => !!skills.length);
  const renderExperiences = experiences && !!experiences.length;
  const renderProjects = projects && !!projects.length;
  const renderEducations = educations && !!educations.length;

  const Spacer = () => {
    return <div className="spacer" />;
  };

  return (
    <div className="page">
      <div className="header">
        <div className="h1">Samuel Cha</div>
      </div>
      <div className="subheader">Austin, TX</div>

      <Divider />

      {renderLinks && <Links links={links} />}

      <Divider />

      {renderSkills && <TechnicalSkills technicalSkills={technicalSkills} />}

      <Divider />

      {renderExperiences && <Experiences experiences={experiences} />}

      <Divider />

      {renderProjects && <Projects projects={projects} />}

      <Divider />

      {renderEducations && <Educations educations={educations} />}

      <Spacer />

      <div className="footer" />
    </div>
  );
};
