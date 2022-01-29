module.exports = ***REMOVED***
  displayName: 'site',
  preset: '../../jest.preset.js',
  transform: ***REMOVED***
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', ***REMOVED*** presets: ['@nrwl/next/babel'] ***REMOVED***],
***REMOVED***
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/site',
***REMOVED***;
