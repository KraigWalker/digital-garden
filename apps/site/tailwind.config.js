const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    /// './public/**/*.html',
    /// './src/**/*.{js,jsx,ts,tsx,vue}',
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  media: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require('../../tailwind-workspace-preset.js')],
};
