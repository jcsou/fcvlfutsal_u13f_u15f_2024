const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fcvlfutsal_u13f_u15f_2024/dist/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
})
