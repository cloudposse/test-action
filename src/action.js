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

  const suite_id = suites.data.check_runs
    .filter( item => { return item.name == id})
    .map(item => { return item.id }).pop()

  const test = await octokit.rest.checks.update({
    owner: context.repo.owner,
    repo: context.repo.repo,
    check_run_id: suite_id,
    html_url: "https://github.com/cloudposse/infra-test/test",
    output: {
      title: "Test title",
      summary: "Test"
    }
  });

  console.log(test);

  await octokit.rest.checks.listForRef({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: sha
  }).then( item => {
    item.data.check_runs
      .filter( item => { return item.name == id})
      .forEach(item => { console.log(item) })
  })
}

module.exports = {
  runAction
}
