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
        {
            text: 'GitHub',
            link: 'https://github.com/Lambda-School-Labs/pic_me',
        },
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
        { technology: 'Passport', link: 'http://www.passportjs.org/' },
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

const Jobseekr_forked = {
    urls: [
        { text: 'Demo', link: 'https://jobseekr-forked.herokuapp.com/' },
        { text: 'GitHub', link: 'https://github.com/samscha/jobseekr' },
        {
            text: 'Blog',
            link:
                'https://medium.com/@samscha/adding-search-and-duplicate-checker-to-an-existing-job-seeker-app-detailed-8577a0339429',
        },
    ],
    technologies: [
        { technology: 'MongoDB' },
        { technology: 'Express', link: 'https://expressjs.com/' },
        { technology: 'React' },
        { technology: 'Node.js' },
    ],
    title: 'Jobseekr (forked)',
    subtitle: 'Forked repo for job seeker app',
    description: 'Added job search and duplicate checker features',
};

const CashEnvelope = {
    urls: [
        { text: 'Demo', link: 'https://expo.io/@samscha/cash-envelope-native' },
        {
            text: 'GitHub (app)',
            link: 'https://github.com/samscha/cash-envelope-native',
        },
        {
            text: 'GitHub (server)',
            link: 'https://github.com/samscha/cash-envelope',
        },
        {
            text: 'Blog',
            link:
                'https://medium.com/@samscha/creating-a-postgres-java-spring-react-native-virtual-cash-envelope-app-in-depth-tutorial-9dc62af8fd3f',
        },
    ],
    technologies: [
        { technology: 'PostgreSQL' },
        { technology: 'Spring', link: 'https://expressjs.com/' },
        { technology: 'Java' },
        { technology: 'Native' },
    ],
    title: 'Cash Envelope',
    subtitle: 'Virtual cash envelopes',
    description:
        'A simple app for keeping track of finances through virtual cash envelope',
};

export default [
    CashEnvelope,
    Jobseekr_forked,
    PicMe,
    TrackMyJobs,
    Foodggregator,
];
