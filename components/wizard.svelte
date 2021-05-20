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

  var currentStep = 0;
  const goToNext = () => {
    currentStep += 1;
  };

  var steps = new Array(5).fill(0);
</script>

<Grid padding fullwidth>
  <Row>
    <Column>
    <ProgressIndicator preventChangeOnClick currentIndex={currentStep}>
    {#each steps as _, position}
      <ProgressStep
        complete={currentStep >= position}
        label={$t('wizard.step', { values: { step: position + 1 } })}
        description="The progress indicator will listen for clicks on the steps"
      />  
    {/each}
</ProgressIndicator>      
    </Column>
  </Row>
  <Row>
    <Column>
      <slot></slot>
    </Column>  
  </Row>
  <Row>
    <Column>
      <Button kind="tertiary" on:click={goToNext}>{$t('wizard.next')}</Button>
    </Column>
  </Row>
</Grid>