const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    viewportWidth:750,
    viewportHeight :660,
    
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
