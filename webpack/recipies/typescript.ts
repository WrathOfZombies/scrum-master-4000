import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import type { Recipie } from '../interface'

const typescript: Recipie = () => ({
  resolve: {
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
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

const esbuild: Recipie = () => {
  return {
    module: {
      rules: [
        {
          test: /\.[j|t]sx?$/,
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
