const mrbConfig = require("./mrb-theme/mrb-config");

module.exports = mrbConfig({
  content: [],
  safelist: [{ pattern: /./ }],
  theme: {
    extend: {},
  },
  plugins: [],
});
