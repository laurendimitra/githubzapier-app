const sample = require('../samples/sample_issue');

const createComment = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://api.github.com/repos/${bundle.inputData.repo}/issues/:number/comments`,
    body: JSON.stringify({
      body: bundle.inputData.body
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'comment',
  noun: 'Comment',

  display: {
    label: 'Create Comment',
    description: 'Creates a Comment.'
  },

  operation: {
    inputFields: [
      {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
      {key: 'body', label:'Comment Body', required: true},
    ],
    perform: createComment,
    sample: sample
  }
};
