import path from 'path'
import type { Recipie } from '../interface'

const dist: Recipie = () => ({
  output: {
    path: process.env.DIST_DIR || path.resolve(process.cwd(), 'dist'),
  },
})

export { dist }
