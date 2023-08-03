const path = require('path');

const buildDir = 'dist';
const buildPath = path.resolve(__dirname, buildDir);

module.exports = {
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	entry: './src/index',
	output: {
		path: buildPath,
		filename: 'index.js',
	},
	devServer: {
		static: buildPath,
		port: 3000,
	},
};
