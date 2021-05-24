import path from 'path'
import type { Recipie } from '../interface'
import { MiniHtmlWebpackPlugin } from 'mini-html-webpack-plugin'
import { WebpackPluginServe } from 'webpack-plugin-serve'

const devServer: Recipie = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: 3000,
      static: path.resolve(process.cwd(), 'dist'),
      historyFallback: true,
    }),
  ],
})

const page: Recipie = ({ title }) => ({
  plugins: [new MiniHtmlWebpackPlugin({ publicPath: '/', context: { title } })],
})

const fastSourceMaps: Recipie = () => ({ devtool: 'eval-cheap-module-source-map' })

const qualitySourceMaps: Recipie = () => ({ devtool: 'source-map' })

export { devServer, page, fastSourceMaps, qualitySourceMaps }
