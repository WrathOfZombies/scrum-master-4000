<script lang="ts">
  import { t } from 'svelte-i18n'
  import { Grid, Row, Column } from 'carbon-components-svelte'
</script>

<Grid>
  <Row>
    <Column>
      <h1>{$t('thankyou.title')}</h1>
    </Column>
  </Row>
  <Row>
    <Column>
      <p>{$t('thankyou.subtitle')}</p>
    </Column>
  </Row>
</Grid>

<style>
  p {
    opacity: 0.5;
  }
</style>
