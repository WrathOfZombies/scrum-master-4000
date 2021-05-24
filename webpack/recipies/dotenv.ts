import DotenvPlugin from 'dotenv-webpack'
import type { Recipie } from '../interface'

const useDotenv: Recipie = () => ({
  plugins: [new DotenvPlugin()],
})

export { useDotenv }
