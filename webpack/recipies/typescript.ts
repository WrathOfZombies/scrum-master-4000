import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import type { Recipe } from '../interface'

const typescript: Recipe = () => ({
  resolve: {
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          onlyCompileBundledFiles: true,
          useCaseSensitiveFileNames: true,
          compilerOptions: {
            assumeChangesOnlyAffectDirectDependencies: true,
            skipLibCheck: true,
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        memoryLimit: 4096,
      },
    }),
  ],
})

const esbuild: Recipe = () => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'esbuild-loader',
          options: {
            target: 'es2018',
          },
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: true,
        typescript: {
          memoryLimit: 4096,
        },
      }),
    ],
  }
}

export { typescript, esbuild }
