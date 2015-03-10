module.exports = {
  development: {
    options: {
      mangle: false,
      compress: false,
      beautify: true
    },
    files: {
      "dist/js/vendor.js": [
      ],
      "dist/js/app.js": [
        "js/app.js"
      ]
    }
  },
  production: {
    options: {
      mangle: false,
      compress: false,
      beautify: true
    },
    files: {
      "dist/js/vendor.js": [
      ],
      "dist/js/app.js": [
        "js/app.js"
      ]
    }
  }
};
