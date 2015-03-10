module.exports = {
  css: {
    files: ["css/**/*"],
    tasks: ["scsslint:all", "sass:development"]
  },
  js: {
    files: ["js/**/*", "tasks/**/*"],
    tasks: ["jshint", "uglify"]
  }
};