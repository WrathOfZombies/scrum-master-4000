<script lang="typescript">
  import { t } from 'svelte-i18n'
  import { Form, Grid, Row, NumberInput, Column } from 'carbon-components-svelte'
  // import { createEventDispatcher } from 'svelte'

  // const dispatch = createEventDispatcher()

  type SprintMetric = 'start' | 'added' | 'removed' | 'done' | 'qa' | 'rest'

  const sprint: Record<SprintMetric, number> = {
    start: 0,
    added: 0,
    removed: 0,
    done: 0,
    qa: 0,
    rest: 0,
  }

  // function submitForm() {
  //   dispatch('result', sprint)
  // }

  const metrics = Object.keys(sprint) as SprintMetric[]
</script>

<Form>
  <Grid padding fullWidth>
    {#each metrics as metric (metric)}
      <Row>
        <Column>
          <NumberInput
            label={$t(`form.${metric}`)}
            helperText={$t(`form.${metric}Label`)}
            size="xl"
            required
            bind:value={sprint[metric]}
          />
        </Column>
      </Row>
    {/each}
  </Grid>
</Form>
