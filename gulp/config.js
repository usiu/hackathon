var publicDirectory = "./public";
var distDirectory = "./dist";
var configDirectory = './config';
var distAssets = distDirectory + "/assets";
var sourceDirectory = "./app";
var sourceAssets = "./assets";
var webpack = require('webpack');
var webpackManifest = require('./lib/webpackManifest');

var webpackConfig = function(env) {

    var jsSrc = sourceAssets + '/javascripts/'
    var jsDest = distAssets + '/javascripts/'
    var publicPath = 'assets/javascripts/'

    var webpackConfig = {
        entry: {
            app: [sourceDirectory + '/app.jsx']
        },

        output: {
            path: jsDest,
            filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
            publicPath: publicPath
        },

		noParse: [],

        plugins: [],

        resolve: {
            extensions: ['', '.js', '.jsx']
        },

        module: {
            loaders: [{
                test: /\.(js(\?.*)?)$/,
                loader: 'babel-loader?experimental',
                exclude: /node_modules/
            }, {
                test: /\.(jsx(\?.*)?)$/,
                loaders: ['jsx-loader?harmony', 'babel-loader'],
                exclude: /node_modules/
            }]
        }
    }

    if (env !== 'test') {
        // Factor out common dependencies into a shared.js
        webpackConfig.plugins.push(
            new webpack.optimize.CommonsChunkPlugin({
                name: 'shared',
                filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
            })
        )
    }

    if (env === 'development') {
        webpackConfig.devtool = 'sourcemap'
        webpack.debug = true
    }

    if (env === 'production') {
        webpackConfig.plugins.push(
            new webpackManifest('javascripts/', 'dist'),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin(),
			new webpack.NoErrorsPlugin(),
            new webpack.PrefetchPlugin("react"),
            new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment"),
            new webpack.DefinePlugin({GA_TRACKING_CODE: JSON.stringify('XXXXXXXX')})

        );
    }

    return webpackConfig
}

//Actual Configs
module.exports = {
    publicDirectory: publicDirectory,
	configDirectory: configDirectory,
    distDirectory: distDirectory,
	sourceDirectory: sourceDirectory,
    sourceAssets: sourceAssets,
    distAssets: distAssets,
	apiConfigs: {
		development: {
			baseUrl: 'http://127.0.0.1:8000',
			url: 'http://127.0.0.1:8000/api/v1',
		},
		production: {
			baseUrl: 'http://usiuhackathon.me:8001',
			url: 'http://usiuhackathon.me:8001/api/v1',
		}
	},
    webpack: webpackConfig,
    html: {
        src: '/views/layouts/main.handlebars',
        dest: distDirectory
    },
    images: {
        src: sourceAssets + "/images/**",
        dest: distAssets + "/images"
    },
    sass: {
        src: sourceAssets + "/stylesheets/**.scss",
        dest: distAssets + '/stylesheets',
        settings: {
			errLogToConsole: true,
            indentedSyntax: false,
            imagePath: 'assets/images' // Used by the image-url helper
        }
    }
}
