module.exports = function(grunt) {
  var configs, options;

  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);
  grunt.loadTasks("tasks");

  // Project settings
  options = {
    configPath: require("path").join(process.cwd(), "tasks"),
    init: true,
    data: {
      pkg: grunt.file.readJSON("package.json")
    }
  };
  configs = require("load-grunt-config")(grunt, options);
};