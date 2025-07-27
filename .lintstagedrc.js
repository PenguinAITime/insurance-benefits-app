module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  '*.{json,md}': (filenames) => `prettier --write ${filenames.join(' ')}`,
};