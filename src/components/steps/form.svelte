<script lang="typescript">
  import { t } from 'svelte-i18n'
  import { Form, Grid, Row, Button, NumberInput, Column } from 'carbon-components-svelte'
  import { currentSprint, SprintMetric } from '../../utils/store/sprint'
  import Calculation from 'carbon-icons-svelte/lib/Calculation16'
  import { createEventDispatcher } from 'svelte'

  export let goToNext: () => void

  const dispatch = createEventDispatcher()

  function submitForm() {
    dispatch('onCalculate', $currentSprint)
    goToNext()
  }

  const metrics = Object.keys($currentSprint) as SprintMetric[]
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
            bind:value={$currentSprint[metric]}
          />
        </Column>
      </Row>
    {/each}
    <Row>
      <Column>
        <Button icon={Calculation} kind="tertiary" target="_blank" on:click={submitForm}>{$t('form.button')}</Button>
      </Column>
    </Row>
  </Grid>
</Form>
