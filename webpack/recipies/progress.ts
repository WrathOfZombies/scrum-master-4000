import WebpackBar from 'webpackbar'
import type { Recipe } from '../interface'

const progress: Recipe = () => ({
  plugins: [new WebpackBar({ color: '#50A2FF', profile: true })],
})

export { progress }
