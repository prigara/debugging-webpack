var path = require('path');
module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: "source-map"
};
