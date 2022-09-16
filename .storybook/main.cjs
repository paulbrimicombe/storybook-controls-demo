module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowJs: true,
      },
      include: ["**/*.jsx"],
    },
  },
  staticDirs: ["../static"],
  webpackFinal: (config) => {
    config.module.rules
      .filter((rule) => rule.test.test(".js") || rule.test.test(".jsx"))
      .forEach((rule) => {
        rule.resolve = { fullySpecified: false };
      });
    return config;
  },
  managerWebpackFinal: (config) => {
    config.module.rules
      .filter((rule) => rule.test.test(".js") || rule.test.test(".jsx"))
      .forEach((rule) => {
        rule.resolve = { fullySpecified: false };
      });
    return config;
  },
};
