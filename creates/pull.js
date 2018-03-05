const sample = require('../samples/sample_pull');

const createPull = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://api.github.com/repos/${bundle.inputData.repo}/merges`,
    body: JSON.stringify({
      title: bundle.inputData.title
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'pull',
  noun: 'Pull',

  display: {
    label: 'Merge Pull',
    description: 'Creates the ability to merge a Pull Request.'
  },

  operation: {
    inputFields: [
      {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
      {key: 'title', label:'Title', required: true},
      {key: 'body', label:'Body', required: false}
    ],
    perform: createPull,
    sample: sample
  }
};
