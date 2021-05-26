import Autoprefixer from 'autoprefixer'
import path from 'path'
import SveltePreprocess from 'svelte-preprocess'

import type { Recipe } from '../interface'

export const svelte: Recipe = ({ isDevelopment, isProduction }) => {
  return {
    resolve: {
      alias: {
        svelte: path.dirname(require.resolve('svelte/package.json')),
      },
      extensions: ['.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: isDevelopment,
              },
              emitCss: isProduction,
              hotReload: isDevelopment,
              hotOptions: {
                noPreserveState: false,
                optimistic: true,
              },
              preprocess: SveltePreprocess({
                scss: true,
                sass: true,
                postcss: {
                  plugins: [Autoprefixer],
                },
              }),
            },
          },
        },
        {
          // required to prevent errors = require Svelte on Webpack 5+, omit on Webpack 4
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  }
}
