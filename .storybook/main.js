module.exports = {
  "stories": [
    "../src/app/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "creevey",
    "@storybook/addon-storyshots"
  ],
  "core": {
    "builder": "webpack5"
  }
}