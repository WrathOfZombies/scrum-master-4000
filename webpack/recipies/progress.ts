import WebpackBar from 'webpackbar'
import type { Recipie } from '../interface'

const progress: Recipie = () => ({
  plugins: [new WebpackBar({ color: '#FF4444', profile: true })],
})

export { progress }
