const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  // 基本路径
  publicPath: '/',
 
  // 输出文件目录
  outputDir: 'dist',
 
  // 静态资源目录
  assetsDir: 'static',
 
  // 是否使用eslint
  lintOnSave: false,

  
  // webpack配置
  configureWebpack: {
    // 插件
    plugins: [
       new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./')
      }),
      new CopyWebpackPlugin({
        patterns:[
          { from: 'node_modules/cesium/Build/Cesium/Widgets',to: 'Widgets' },
          { from: 'node_modules/cesium/Build/Cesium/Workers',to: 'Workers' },
          { from: 'node_modules/cesium/Build/Cesium/Assets',to: 'Assets' },
          { from: 'node_modules/cesium/Build/Cesium/ThirdParty',to: 'ThirdParty' },
      ]
    })
    ]
  },

  devServer: {
    open: true,  //启动项目 浏览器自动打开网页
  },

  // 第三方插件配置
  pluginOptions: {
    
  }
}
