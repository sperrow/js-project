const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     entry: [
//       "./src/spotify-api.js",
//       './src/scss/main.scss'
//     ],
//     output: {
//         path: __dirname,
//         filename: "dist/bundle.js"
//     },
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: ExtractTextPlugin.extract({
//             // fallback: 'style-loader',
//             use: ['sass-loader']
//           })
//         }
//       ]
//     },
//     plugins: [
//       new ExtractTextPlugin('style.css')
//     ]
// };

module.exports = {
  entry: ['./src/js/main.js', './src/scss/main.scss'],
	output: {
		filename: 'dist/js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
							outputPath: 'dist/css/'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};
