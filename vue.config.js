module.exports = {
	runtimeCompiler: true,
	css: {
      loaderOptions: {
        scss: {
          prependData: '@import "@/assets/css/main.scss";'
        }
      },
      extract: false
    }
}