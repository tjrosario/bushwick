module.exports = {
  options: {
    force: true,
    jshintrc: "tasks/config/.jshintrc"
  },
  all: [
    "js/**/*.js",
    "!js/vendor/**/*.js"
  ]
};
