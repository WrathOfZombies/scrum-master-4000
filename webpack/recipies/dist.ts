import path from 'path'
import type { Recipie } from '../interface'

const dist: Recipie = () => ({
  output: {
    path: path.resolve(process.cwd(), 'public/build'),
  },
})

export { dist }
