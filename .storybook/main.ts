import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",

  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      fsCache: true,
      lazyCompilation: true
    },
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async(config: Configuration) => {
    return config;
  }
};
export default config;
