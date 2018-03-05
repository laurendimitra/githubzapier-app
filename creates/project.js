const sample = require('../samples/sample_project');

const createProject = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://api.github.com/repos/${bundle.inputData.repo}/projects`,
    headers: {
        Accept: "application/vnd.github.jean-grey-preview+json,application/vnd.github.inertia-preview+json"
    },
    body: JSON.stringify({
      name: bundle.inputData.name
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'project',
  noun: 'Project',

  display: {
    label: 'Create Project',
    description: 'Creates a project.'
  },

  operation: {
    inputFields: [
      {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
      {key: 'name', label:'Name', required: true},
      {key: 'body', label:'Body', required: false}
    ],
    perform: createProject,
    sample: sample
  }
};
