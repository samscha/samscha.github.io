// ALL OF THESE PROJECTS WILL BE MOVED TO THE BACKEND SOON *********************

const Foodggregator = {
  urls: [
    { text: 'Demo', link: 'https://foodggregator.herokuapp.com/' },
    { text: 'GitHub', link: 'https://github.com/samscha/Foodggregator' },
  ],
  technologies: [
    { technology: 'MongoDB' },
    { technology: 'Express', link: 'https://expressjs.com/' },
    { technology: 'React' },
    { technology: 'Node.js' },
  ], // "_id": "************", - doc _id will NOT be sent down in production
  title: 'Foodggregator',
  subtitle: 'Food and Restaurant Data Aggregator',
  description: 'Tired of all the food apps out there?',
};
// "thumbnail": "Foodggregator/*************************.jpg" - this is where the thumbnail will come from but it will be converted to stream when sent down (not fully complete yet)

const PicMe = {
  thumbAlt: 'pic-me-landing',
  urls: [
    { text: 'Demo', link: 'https://labpicme.herokuapp.com/' },
    { text: 'GitHub', link: 'https://github.com/Lambda-School-Labs/pic_me' },
  ],
  technologies: [
    { technology: 'MongoDB' },
    { technology: 'Express', link: 'https://expressjs.com/' },
    { technology: 'React' },
    { technology: 'Node.js' },
    { technology: 'AWS' },
    {
      technology: 'Bootstrap',
      custom: 'icon-bootstrap',
      link: 'https://getbootstrap.com/',
    },
    { technology: 'PassportJS', link: 'http://www.passportjs.org/' },
    {
      technology: 'Stripe',
      icon: ['fab', 'cc-stripe'],
      link: 'https://stripe.com/',
    },
  ],
  title: 'PicMe',
  subtitle: 'Photo Finding and Sharing Platform',
  description: 'Find your next best photo!',
};

const TrackMyJobs = {
  urls: [
    { text: 'Demo', link: 'https://track-my-jobs.herokuapp.com/' },
    { text: 'GitHub', link: 'https://github.com/samscha/track-my-jobs' },
  ],
  technologies: [
    { technology: 'MongoDB' },
    { technology: 'Express', link: 'https://expressjs.com/' },
    { technology: 'React' },
    { technology: 'Node.js' },
  ],
  title: 'Track My Jobs',
  subtitle: 'A Simple Job Tracker',
  description: 'Track your jobs and show off your statistics',
};

export default [PicMe, TrackMyJobs, Foodggregator];
