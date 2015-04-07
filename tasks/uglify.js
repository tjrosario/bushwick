module.exports = {
  development: {
    options: {
      mangle: false,
      compress: false,
      beautify: true
    },
    files: {
      "dist/js/vendor.js": [
        "bower_components/jquery/dist/jquery.js",
        "js/vendor/jquery.easing.js",
        "js/vendor/slick.js"
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
        "bower_components/jquery/dist/jquery.js",
        "js/vendor/jquery.easing.js",
        "js/vendor/slick.js"
      ],
      "dist/js/app.js": [
        "js/app.js"
      ]
    }
  }
};
