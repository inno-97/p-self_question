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
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-react',
								['@babel/preset-env', { targets: { node: '12' } }],
							],
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
				exclude: ['/node_modules/'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 12000,
						},
					},
				],
			},
		],
	},
	devServer: {
		static: buildPath,
		port: 3000,
	},
};
