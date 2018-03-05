const sample = require('../samples/sample_pull');

const triggerPull = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: `https://api.github.com/repos/${bundle.inputData.repo}/pulls`,
    params: {
      filter: bundle.inputData.filter,
      state: bundle.inputData.state,
      sort: 'updated',
      direction: 'desc'
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'pull',
  noun: 'Pull',

  display: {
    label: 'Get Pull',
    description: 'Triggers on a new pull request.'
  },

  operation: {
    inputFields: [
      {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
      {key:'filter', required: false, label: 'Filter', choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'}, helpText:'Default is "assigned"'},
      {key:'state', required: false, label: 'State', choices: {open:'open',closed:'closed',all:'all'}, helpText:'Default is "open"'}
    ],
    perform: triggerPull,

    sample: sample
  }
};
