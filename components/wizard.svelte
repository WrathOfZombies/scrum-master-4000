<script>
  import { t } from "svelte-i18n";
  import {
    Grid,
    Row,
    Column,
    Button,
    ProgressIndicator,
    ProgressStep
  } from "carbon-components-svelte";

  export let steps = [];
  export let currentStep = 0;
  let step;

  const goToNext = () => (currentStep += 1);

  $: {
    step = steps[currentStep];
  }
</script>

{#if steps.length}
<Grid padding fullwidth>
  <Row>
    <Column>
      <ProgressIndicator preventChangeOnClick currentIndex={currentStep}>
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
      <svelte:component this={step} goToNext={goToNext} />
    </Column>  
  </Row>
</Grid>
{/if}

