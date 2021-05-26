import path from 'path'

import type { Recipe } from '../interface'

const dist: Recipe = () => ({
  output: {
    path: path.resolve(__dirname, 'public/build'),
    publicPath: '/build/',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
})

export { dist }
