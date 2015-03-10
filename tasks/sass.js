module.exports = {
  development: {
    options: {
      sourcemap: 'auto',
      style: "nested",
      noCache: true
    },
    files: {
      'dist/css/app.css':'css/app.scss'
    }
  },
  production: {
    options: {
      sourcemap: 'auto',
      style: "compressed",
      noCache: true
    },
    files: {
      'dist/css/app.css':'css/app.scss'
    }
  }
};