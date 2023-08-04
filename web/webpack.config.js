require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildDir = 'dist';
const buildPath = path.resolve(__dirname, buildDir);

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
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
				exclude: /node_modules/,
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
	plugins: [
		new HtmlWebpackPlugin({
			template: `./public/index.html`,
		}),
		new CleanWebpackPlugin(),
	],
};
