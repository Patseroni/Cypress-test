const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://127.0.0.1:5500/Assignment-2_Startpage-Escape-Rooms/',
    },
});

