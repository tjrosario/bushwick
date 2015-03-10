module.exports = {
  all: ["css/**/*.scss"],
  options: {
    config: "tasks/config/scss-lint.yml",
    reporterOutput: "tasks/reports/scss-lint-report.xml"
  }
};