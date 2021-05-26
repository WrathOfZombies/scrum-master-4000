import merge from 'webpack-merge'

import type { Recipe } from '../interface'

export { entry } from './entry'
export { devServer, fastSourceMaps, qualitySourceMaps } from './dev-server'
export { svelte } from './svelte'
export { typescript, esbuild } from './typescript'
export { css } from './css'
export { dist } from './dist'
export { progress } from './progress'

export const cookbook =
  (...recipies: Recipe[]): Recipe =>
  (params) =>
    merge.apply(merge, [recipies.map((recipe) => recipe(params))])

export type { Recipe }
