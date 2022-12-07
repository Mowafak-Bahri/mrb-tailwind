const mrbConfig = require("./src/mrb-config");

module.exports = mrbConfig({
  content: [],
  safelist: [{ pattern: /./ }],
  theme: {
    extend: {},
  },
  plugins: [],
});
