/**
 * @param {Object} octokit
 * @param {Object} context
 * @param {Object} parameters
 */
const runAction = async (octokit, context, parameters) => {
  const {
    sha = "",
  } = parameters;

  // Run action
  const suites = await octokit.rest.checks.listForRef({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: sha
  });

  console.log(suites);

  suites.data.check_runs
    .filter( item => { return item.name == "Plan (plat-sandbox) / plat-ue2-sandbox-test-drift-04"})
    .forEach(item => { console.log(item) });

}

module.exports = {
  runAction
}
