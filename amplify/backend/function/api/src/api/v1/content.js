const router = require('express').Router();

//TESTING ONLY
const { API, graphqlOperation } = require('aws-amplify');
const { createSkill } = require('../../graphql/mutations');
let id = 0;

router
    .route('/content')
    .get(async (req, res) => {
        const firstSkill = {
            id: ++id + '',
            text: `Node.js`,
            title: `Click to learn more about Node.js`,
            link: `https://nodejs.org/en/`,
            icon: [`fab`, `node-js`],
            type: `fa`,
        };

        const newSkill = await API.graphql(
            graphqlOperation(createSkill, { input: firstSkill }),
        );

        res.json({ success: 'get content succeed', url: req.url, newSkill });
    })
    .all((req, res) => res.sendStatus(405));

router
    .route('/content/*')
    .get((req, res) => {
        res.json({ success: 'get content * succeed', url: req.url });
    })
    .all((req, res) => res.sendStatus(405));

module.exports = router;
