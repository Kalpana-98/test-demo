module.exports = {
  "stories": [
    "../src/app/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "creevey"
  ],
  "core": {
    "builder": "webpack5"
  }
}