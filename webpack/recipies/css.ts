import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { Recipie } from '../interface'

const css: Recipie = () => {
  return {
    module: {
      rules: [
        {
          test: /\.([s|p]?css)$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'postcss-loader'],
          sideEffects: true,
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
  }
}

export { css }
