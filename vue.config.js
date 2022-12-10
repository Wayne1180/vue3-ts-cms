const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // publicPath: './',
  lintOnSave: false,
  transpileDependencies: true,
  // 2.配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
})
