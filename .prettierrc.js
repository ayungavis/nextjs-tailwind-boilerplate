/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig }  */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  tabWidth: 2,
  printWidth: 80,
  jsxSingleQuote: false,
  tailwindFunctions: ['tv'],
  overrides: [
    {
      files: '*.json.hbs',
      options: { parser: 'json' },
    },
    {
      files: '*.js.hbs',
      options: { parser: 'babel' },
    },
  ],
};
