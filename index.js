const repoTrigger = require('./triggers/repo');
const pullTrigger = require('./triggers/pull');
const projectCreate = require('./creates/project');
const search = require('./searches/repo');
const authentication = require('./authentication');

const handleHTTPError = (response, z) => {
  if (response.status >= 400) {
    throw new Error(`Unexpected status code ${response.status}`);
  }
  return response;
};

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
  ],

  afterResponse: [
    handleHTTPError
  ],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [repoTrigger.key]: repoTrigger,
    [pullTrigger.key]: pullTrigger
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [search.key]: search
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [projectCreate.key]: projectCreate
  }
};

// Finally, export the app.
module.exports = App;
