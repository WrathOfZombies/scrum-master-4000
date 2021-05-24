import type { Configuration } from 'webpack'

type Strategy = 'Common' | 'Production' | 'Development' | 'Testing'

type Strategies = Record<Strategy, Recipie>

type Recipie = (...args: any) => Partial<Configuration>

export { Configuration, Strategy, Strategies, Recipie }
