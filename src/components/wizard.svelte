<script lang="ts">
  import { t } from 'svelte-i18n'
  import { Grid, Row, Column, ProgressIndicator, ProgressStep } from 'carbon-components-svelte'
  import type { SvelteComponent } from 'svelte'

  export let steps: typeof SvelteComponent[] = []
  export let currentStep = 2
  let step: typeof SvelteComponent

  const goToNext = () => {
    if (currentStep < steps.length) {
      currentStep += 1
    }
  }

  $: {
    step = steps[currentStep]
  }
</script>

{#if steps.length}
  <Grid padding fullWidth>
    <Row>
      <Column>
        <ProgressIndicator spaceEqually bind:currentIndex={currentStep}>
          {#each steps as _, position}
            <ProgressStep
              complete={currentStep >= position}
              label={$t('wizard.step', { values: { step: position + 1 } })}
            />
          {/each}
        </ProgressIndicator>
      </Column>
    </Row>
    <Row>
      <Column>
        <svelte:component this={step} {goToNext} />
      </Column>
    </Row>
  </Grid>
{/if}
