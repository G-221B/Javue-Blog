module.exports = {
  devServer: {
    open: true,
    port: 8080,
    // 解决axios跨域
    proxy: {
      "/api": {
        target: "http://localhost:8080/blog",
        changeOrigin: true
      }
    }
  }
}