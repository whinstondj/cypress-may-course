const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9ic299",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
