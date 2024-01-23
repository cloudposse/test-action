const github = require('@actions/github');

/**
 * @param {Object} octokit
 * @param {Object} context
 * @param {Object} parameters
 */
const runAction = async (octokit, context, parameters) => {
  const {
    sha = "",
    id = ""
  } = parameters;

  // Run action
  const suites = await octokit.rest.checks.listForRef({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: sha
  });

  console.log(process.env);

  suites.data.check_runs
    .filter( item => { return item.name == id})
    .forEach(item => { console.log(item) });

  const suite_id = suites.data.check_runs
    .filter( item => { return item.name == id})
    .map(item => { return item.id }).pop()

  await octokit.rest.checks.update({
    owner: context.repo.owner,
    repo: context.repo.repo,
    suite_id,
    output: {
      summary: "Test"
    }
  });
}

module.exports = {
  runAction
}
