import path from 'path'
import preprocess from 'svelte-preprocess'
import type { Recipie } from '../interface'

export const svelte: Recipie = (mode) => {
  const prod = mode === 'production'

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
              // compilerOptions: {
              //   dev: !prod,
              // },
              // preprocess: preprocess({
              //   postcss: true,
              // }),
            },
          },
        },
        {
          // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  }
}
