// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type ***REMOVED***import('@nrwl/next/plugins/with-nx').WithNxOptions***REMOVED***
 **/
const nextConfig = ***REMOVED***
  nx: ***REMOVED***
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
***REMOVED***
***REMOVED***;

module.exports = withNx(nextConfig);
