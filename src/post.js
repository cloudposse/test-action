// const core = require('@actions/core');
// const github = require('@actions/github');
// const {runAction} = require("./action");
//
//
// try {
//     // Get params
//     const token = core.getInput('token');
//     const sha = core.getInput('sha');
//     const id = core.getInput('id');
//
//     // Get octokit
//     const octokit = github.getOctokit(token);
//
//     runAction(octokit, github.context, {
//         sha,
//         id
//     });
// } catch (error) {
//     core.setFailed(error.message);
// }
