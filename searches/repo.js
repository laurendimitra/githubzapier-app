module.exports = {
    key: 'repo',
  
    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: 'Repo',
    display: {
      label: 'Find a Repository',
      description: 'Search for repository by language.'
    },
  
    // `operation` is where we make the call to your API to do the search
    operation: {
      // This search only has one search field. Your searches might have just one, or many
      // search fields.
      inputFields: [
        {
          key: 'style',
          type: 'string',
          label: 'Style',
          helpText: 'Language style to limit to the search to (i.e. javascript or node.js).'
        }
      ],
  
      perform: (z, bundle) => {
        const url = 'https://api.github.com/search/repositories';
  
        // Put the search value in a query param. The details of how to build
        // a search URL will depend on how your API works.
        const options = {
          params: {
            style: bundle.inputData.style
          }
        };
  
        return z.request(url, options)
          .then(response => JSON.parse(response.content));
      },
  
      // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
      // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
      // returned records, and have obviously dummy values that we can show to any user.
      sample: {
        "total_count": 40,
        "incomplete_results": false,
        "items": [
          {
            "id": 3081286,
            "name": "Tetris",
            "full_name": "dtrupenn/Tetris",
            "owner": {
              "login": "dtrupenn",
              "id": 872147,
              "avatar_url": "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dtrupenn",
              "received_events_url": "https://api.github.com/users/dtrupenn/received_events",
              "type": "User"
            },
            "private": false,
            "html_url": "https://github.com/dtrupenn/Tetris",
            "description": "A C implementation of Tetris using Pennsim through LC4",
            "fork": false,
            "url": "https://api.github.com/repos/dtrupenn/Tetris",
            "created_at": "2012-01-01T00:31:50Z",
            "updated_at": "2013-01-05T17:58:47Z",
            "pushed_at": "2012-01-01T00:37:02Z",
            "homepage": "",
            "size": 524,
            "stargazers_count": 1,
            "watchers_count": 1,
            "language": "Assembly",
            "forks_count": 0,
            "open_issues_count": 0,
            "master_branch": "master",
            "default_branch": "master",
            "score": 10.309712
          }
        ]
      },
  
      // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
      // field definitions. The result will be used to augment the sample.
      // outputFields: () => { return []; }
      // Alternatively, a static field definition should be provided, to specify labels for the fields
      outputFields: [
        {key: 'license', label: 'License'},
        {key: 'pushed', label: 'Pushed'},
        {key: 'created', label: 'Created'},
        {key: 'fork', label: 'Fork'},
        {key: 'forks', label: 'Forks'},
        {key: 'in', label: 'In'},
        {key: 'language', label: 'Language'},
        {key: 'user', label: 'User'},
        {key: 'repo', label: 'Repo'},
        {key: 'stars', label: 'Stars'},
        {key: 'topic', label: 'Topic'},
        {key: 'size', label: 'Size'}
      ]
    }
  };