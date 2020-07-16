export default [
    {
        name: 'React Component Library',
        techs: 'React',
        image: {
            alt: 'React Component Library showcase',
            src: `${process.env.REACT_APP_IMAGES_BASE_URL}/react-component-library-showcase.png`,
            title: 'React Component Library showcase',
        },
        info: `Helped build out a library of first- and third-party React components to be injected into other projects.

Notable components include an image carousel with lightbox feature, a form driven and styled by props, and a multi-file uploader with multi-delete.`,
        externalLink: {
            href:
                'https://www.newhomeguide.com/community/bellingham-meadows/1530',
            title:
                'Click to go an example page showcasing React Component Library components',
        },
    },
    {
        name: 'Cash Envelope',
        techs: 'React Native, Java, PostgreSQL',
        image: {
            alt: 'Cash Envelope app showcase',
            src: `${process.env.REACT_APP_IMAGES_BASE_URL}/cash-envelope-showcase.png`,
            title: 'Cash Envelope app showcase',
        },
        info: `Built a React Native app with Java-Spring backend connected to PostgreSQL.

Features included creating a new user, creating multiple virtual envelopes that hold currency values and notes, as well as session authentication via JWT.`,
        externalLink: {
            href: 'https://github.com/samscha/cash-envelope-native',
            title: 'Click to go to GitHub repo for Cash Envelope',
        },
    },
    {
        name: 'PicMe',
        techs: 'MongoDB, Express, React, Node',
        image: {
            alt: 'PicMe showcase',
            src: `${process.env.REACT_APP_IMAGES_BASE_URL}/picme-showcase.png`,
            title: 'PicMe showcase',
        },
        info: `Culminating project at Lambda School built in collaboration with two other developers. Over the course of four weeks, built a web app from scratch where users can upload photos of their friends, find their pictures uploaded by others, and buy credits to download photos.

Implemented all aspects of the backend using Express and including authentication via Passport (local and Twitter SSO) as well as Stripe integration for payments.`,
        externalLink: {
            href: 'https://github.com/Lambda-School-Labs/pic_me',
            title: 'Click to go to GitHub repo for PicMe',
        },
    },
];
