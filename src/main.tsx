import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App, Page } from './components';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
      renderContent={
        <Page
          links={[
            {
              href: 'mailto:sam@samscha.com',
              title: 'click to email sam',
              text: 'sam@samscha.com',
            },
            {
              href: 'https://linkedin.com/in/chasamuels',
              title: "Click to go to Sam's LinkedIn",
              text: 'linkedin.com/in/chasamuels',
            },
            {
              href: 'https://github.com/samscha',
              title: "Click to go to Sam's GitHub",
              text: 'github.com/samscha',
            },
          ]}
          technicalSkills={[
            {
              technicalSkill: 'Languages',
              skills: ['JavaScript', 'TypeScript'],
            },
            {
              technicalSkill: 'Frameworks',
              skills: ['React', 'Node.js', 'DynamoDB'],
            },
            {
              technicalSkill: 'Developer Tools',
              skills: ['Amazon Web Services (AWS)', 'Git'],
            },
          ]}
          experiences={[
            {
              title: 'Software Applications Developer',
              company: 'TTW Solutions',
              start: '8/2023',
              end: null,
              present: true,
              location: 'Remote',
              descriptions: [
                'Develop a full-stack solution to manually created reporting spreadsheets, including converting a frontend solution to a backend solution with an increase in data in the system',
                'Develop a reporting dashboard for HR process actions and connect to a third-party API',
                'Update web application to be in compliance by fixing keyboard navigation, visible focus, and color contrast issues',
                'Add features to existing HR process, including adding download all attachments functionality',
                'Utilize JavaScript, TypeScript, Node.js, DynamoDB, AWS',
              ],
            },
            {
              title: 'Software Engineer',
              company: 'Volusion',
              start: '8/2020',
              end: '1/2023',
              present: false,
              location: 'Austin, TX',
              descriptions: [
                'Increased a Node.js API’s responsiveness by up to 90% and decreased failure rate from 10% to less than 1% while nearly doubling the request rate',
                'Researched and proposed a solution that decreased JavaScript bundle size / unused JavaScript which led to 40% to 70% savings in seconds when loading React-built storefronts',
                'Developed a microservice for media management using Fastify, PostgreSQL, and a third-party cloud provider',
                'Designed and implemented a Docker solution for local development of a JavaScript API connected to Microsoft SQL Server',
                'Utilized TypeScript, Node.js, PostgreSQL, MSSQL, Docker, and Google Cloud Platform (GCP)',
              ],
            },
            {
              title: 'Software Engineer',
              company: 'NewPoint Media',
              start: '12/2018',
              end: '3/2020',
              present: false,
              location: 'Austin, TX',
              descriptions: [
                'Reduced Google Maps API key cost by 80% after an increase of web traffic by introducing a Redis cache layer',
                'Designed, built, and tested an internal React component library to modernize multiple projects using different programming languages and frameworks',
                'Utilized JavaScript, Node.js, PHP, and Redis',
              ],
            },
          ]}
          projects={[
            {
              name: 'Personal Website',
              tools: ['GitHub Pages', 'React', 'Vite', 'TypeScript'],
              start: '1/2025',
              end: null,
              present: true,
              descriptions: [
                'Rewrite using React, TypeScript, and Vite',
                'Deploy to GitHub Pages via GitHub Actions',
              ],
            },
            {
              name: 'Personal Website (previous)',
              tools: ['Amazon Web Services (AWS)', 'React'],
              start: '8/2018',
              end: '12/2023',
              present: false,
              descriptions: [
                'Moved project to AWS from different CDN provider',
                'Utilized AWS Amplify for Continuous Integration/Continuous Deployment (CI/CD)',
                'Utilized AWS Cloudfront and AWS Simple Storage Service (S3) for images',
                'Utilized Amazon WorkMail for emails',
              ],
            },
          ]}
          educations={[
            {
              institution: 'BloomTech',
              focus: 'Full Stack Web Development',
              location: 'Remote',
              start: '12/2017',
              end: '6/2018',
              present: false,
            },
            {
              institution: 'University of Washington',
              focus: 'Bachelor of Science in Bioresource Science & Engineering',
              location: 'Seattle, WA',
              start: '2008',
              end: '2012',
              present: false,
            },
          ]}
        />
      }
    />
  </StrictMode>
);
