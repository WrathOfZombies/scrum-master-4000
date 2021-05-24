import path from 'path'
import { merge } from 'webpack-merge'
import argv from 'webpack-nano/argv'
import type { Recipie } from './interface'

import { devServer, esbuild, dist, extractCSS, fastSourceMaps, page, svelte, useDotenv } from './recipies'

const cookbook =
  (...recipies: Recipie[]): Recipie =>
  (argv) =>
    merge.apply(merge, [...recipies.map((recipe) => recipe(argv))])

const common = cookbook(({ mode }) => ({ mode }), dist, page, svelte, extractCSS, useDotenv)

const development = cookbook(
  common,
  () => ({ entry: ['./src/index.ts', 'webpack-plugin-serve/client'] }),
  () => ({ target: 'web' }),
  fastSourceMaps,
  esbuild,
  devServer
)

const production = cookbook(common)

const getConfig = (args) => {
  const argv = {
    ...args,
    title: 'Scrum Master 4000',
  }

  switch (argv.mode) {
    case 'production':
      return production(argv)

    case 'development':
      return development(argv)

    default:
      throw new Error(`Unknown mode, ${argv.mode}`)
  }
}

export default getConfig(argv)
