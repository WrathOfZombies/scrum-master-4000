import path from 'path'
import { merge } from 'webpack-merge'
import argv from 'webpack-nano/argv'
import type { Recipie } from './interface'

import { devServer, esbuild, dist, css, fastSourceMaps, page, svelte, progress } from './recipies'

const cookbook =
  (...recipies: Recipie[]): Recipie =>
  (params) =>
    merge.apply(merge, [...recipies.map((recipe) => recipe(params))])

const common = cookbook(({ mode }) => ({ mode, target: 'web' }), dist, page, svelte, css, progress)

const development = cookbook(
  common,
  () => ({ entry: ['webpack-plugin-serve/client', './src/main.ts'] }),
  fastSourceMaps,
  esbuild,
  devServer
)

const production = cookbook(common)

const getConfig = (args) => {
  const params = {
    mode: args.mode,
    title: 'Scrum Master 4000',
  }

  switch (params.mode) {
    case 'production':
      return production(params)

    case 'development':
      return development(params)

    default:
      throw new Error(`Unknown mode, ${params.mode}`)
  }
}

export default getConfig(argv)
