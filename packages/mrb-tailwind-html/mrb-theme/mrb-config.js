
const merge = require("deepmerge");
const plugin = require("tailwindcss/plugin");

const {
  shadows,
  breakpoints,
  colors,
  typography,
} = require("./theme-defaults");


// components styles
const { button } = require("./components/button");

const mrbTailwindConfig = {
  darkMode: "class",
  content: ["mrb"],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents(button(theme));
    }),
  ],
};

/**
 * Merge mrb-tailwind and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function mrbConfig(tailwindConfig) {
  const themeFont = mrbTailwindConfig.theme.fontFamily;

  if (tailwindConfig.theme.fontFamily) {
    const { sans, serif, body } = tailwindConfig.theme.fontFamily;

    themeFont.sans = sans || themeFont.sans;
    themeFont.serif = serif || themeFont.serif;
    themeFont.body = body || themeFont.body;
  }

  return merge(mrbTailwindConfig, { ...tailwindConfig });
}

module.exports = mrbConfig;
