import {
  cookbook,
  css,
  devServer,
  dist,
  entry,
  typescript,
  esbuild,
  fastSourceMaps,
  progress,
  svelte,
} from './webpack/recipies'

const common = cookbook(entry, dist, svelte, css, progress)

const development = cookbook(common, fastSourceMaps, typescript, devServer)

const production = cookbook(common)

const getConfig = () => {
  const mode = process.env.NODE_ENV ?? 'development'
  const isProduction = mode === 'production'
  const isDevelopment = !isProduction

  const params = {
    isDevelopment,
    isProduction,
    mode,
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

module.exports = getConfig()
