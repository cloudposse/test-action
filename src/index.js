const core = require('@actions/core');
const github = require('@actions/github');

try {
    // Get params
    const token = core.getInput('token');
    const sha = core.getInput('sha');

    // Get octokit
    const octokit = github.getOctokit(token);

    // Run action
    const suites = await octokit.rest.checks.listForRef({
        owner: context.repo.owner,
        repo: context.repo.repo,
        ref: sha
    });

    console.log(suites);

    suites.data.check_runs.forEach(item => { console.log(item) });
} catch (error) {
    core.setFailed(error.message);
}
