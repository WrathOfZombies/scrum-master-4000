import type { Recipe } from '../interface'

const entry: Recipe = ({ mode }) => ({
  mode,
  target: 'web',
  entry: ['./src/main.ts'],
})

export { entry }
