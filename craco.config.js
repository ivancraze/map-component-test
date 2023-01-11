const CracoLessPlugin = require("craco-less");
const path = require('path');

module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            paths.appBuild = webpackConfig.output.path = path.resolve('docs');
            return webpackConfig;
        }
    }
}
