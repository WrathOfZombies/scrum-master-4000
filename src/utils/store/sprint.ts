import { writable } from 'svelte/store'

type SprintMetric = 'start' | 'added' | 'removed' | 'done' | 'qa' | 'rest'

type Sprint = Record<SprintMetric, number>

const createSprint = (sprint: Partial<Sprint> = {}): Sprint => ({
  start: 0,
  added: 0,
  removed: 0,
  done: 0,
  qa: 0,
  rest: 0,
  ...sprint,
})

const currentSprint = writable(createSprint())

export { Sprint, SprintMetric, createSprint, currentSprint }
