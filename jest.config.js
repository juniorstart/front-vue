module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ["node_modules/(?!vee-validate/dist/rules|vuex-composition-helpers)"],
}
