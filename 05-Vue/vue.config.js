module.exports = {
    // 基本路径
    publicPath: '',
    // 生成文件的路径
    outputDirL: '',
    // 静态资源js css img fonts 相对于outputDir的目录
    assetsDir: '',
    // 指定的index.html输出路径
    indexPath: '',
    // 静态资源在文件明包含hash
    filenameHashing: true,
    // 多页面模式下，每隔page都会有一个JavaScript入口文件
    pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        subpage: 'src/subpage/main.js'
    },
    // 在开发环境时，每次保存时lint代码
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue构建版本
    runtimeCompiler: false,
    // Babel显式转译依赖，需要在此列出
    transpileDependencies: [],
    // 生产环境source map
    productionSourceMap: true,
    // 设置生成的HTML<link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。,
    crossorigin: undefined,
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    integrity: false,
    // configureWebpack 最终会被webpack-merge合并到最终的webpack配置
    configureWebpack: {
        plugins: [
          new MyAwesomeWebpackPlugin()
        ]
    },
    // 许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        config.module
          .rule('vue')
          .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
              // 修改它的选项...
              return options
            })
    },
    // css
    css: {
        //如果你想去掉文件名中的 .module
        modules: false,
        // 是否将组件中的css提取到一个独立的css文件中，而不是动态注入的Javascript的inline代码中
        extract: true,
        // 为css 开启source map
        sourceMap: false,
        // css相关的loader传递选项： css-loader, postcss-loader, sass-loader, less-loader, stylus-loader
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "~@/variables.scss";`
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        }
    },
    //
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            "/rest/*": {
				target: "http://172.16.1.12:7071",
				changeOrigin: true,
				// ws: true,//websocket支持
				secure: false
			},
			"/pbsevice/*": {
				target: "http://172.16.1.12:2018",
				changeOrigin: true,
				//ws: true,//websocket支持
				secure: false
			},
        },
        before: app => {}
    },
    parallerl: require('os').cpus().length > 1,
    // pwa 相关设置
    pwa: {

    },
    // 第三方插件
    pluginOptions: {

    }
};