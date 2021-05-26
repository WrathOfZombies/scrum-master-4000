import type { Configuration } from 'webpack'

type Strategy = 'Common' | 'Production' | 'Development' | 'Testing'

type Strategies = Record<Strategy, Recipe>

type Recipe = (...args: any) => Partial<Configuration>

export type { Configuration, Strategy, Strategies, Recipe }
