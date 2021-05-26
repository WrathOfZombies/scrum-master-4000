import type { Recipe } from '../interface'

const devServer: Recipe = () => ({
  stats: {
    chunks: false,
    chunkModules: false,
    modules: false,
    assets: true,
    entrypoints: false,
  },
  devServer: {
    hot: true,
    port: 3000,
    stats: 'none',
    contentBase: 'public',
    watchContentBase: true,
  },
})

const fastSourceMaps: Recipe = () => ({ devtool: 'eval-cheap-module-source-map' })

const qualitySourceMaps: Recipe = () => ({ devtool: 'source-map' })

export { devServer, fastSourceMaps, qualitySourceMaps }
