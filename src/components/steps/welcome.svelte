<script lang="ts">
  import { t } from 'svelte-i18n'
  import { Grid, Row, Column, Button } from 'carbon-components-svelte'
  import ArrowUpRight from 'carbon-icons-svelte/lib/ArrowUpRight16'

  export let goToNext: () => void

  const url =
    'https://outreach-io.atlassian.net/secure/RapidBoard.jspa?rapidView=238&projectKey=OTR&view=reporting&chart=burndownChart&sprint=1347https://outreach-io.atlassian.net/secure/RapidBoard.jspa?rapidView=238&projectKey=OTR&view=reporting&chart=burndownChart&sprint=1347'
</script>

<Grid>
  <Row>
    <Column>
      <h1>{$t('welcome.title')}</h1>
    </Column>
  </Row>
  <Row>
    <Column>
      <p>{$t('welcome.subtitle')}</p>
    </Column>
  </Row>
  <Row>
    <Column>
      <Button icon={ArrowUpRight} kind="tertiary" href={url} target="_blank" on:click={goToNext}
        >{$t('welcome.button')}</Button
      >
    </Column>
  </Row>
</Grid>

<style>
  p {
    opacity: 0.5;
  }
</style>
