<script>
  import { t } from "svelte-i18n";
  import { Tile, Tag, Grid, Row, Column, Button } from "carbon-components-svelte";

  export let goToNext;

  const url =
    "https://outreach-io.atlassian.net/secure/RapidBoard.jspa?rapidView=238&projectKey=OTR&view=reporting&chart=burndownChart&sprint=1347https://outreach-io.atlassian.net/secure/RapidBoard.jspa?rapidView=238&projectKey=OTR&view=reporting&chart=burndownChart&sprint=1347";
</script>

<style>
  p {
    opacity: 0.5;
  }
</style>

<Grid padding>
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
      <Button kind="tertiary" href={url} target="_blank" on:click={goToNext}>Open Jira</Button>
    </Column>
  </Row>
</Grid>