<script>
  import { _ } from "svelte-i18n";
  import { Card, Divider, Headline, Subhead } from "attractions";

  const url =
    "https://outreach-io.atlassian.net/secure/RapidBoard.jspa?rapidView=238&projectKey=OTR&view=reporting&chart=burndownChart&sprint=1347https://outreach-io.atlassian.net/secure/RapidBoard.jspa?rapidView=238&projectKey=OTR&view=reporting&chart=burndownChart&sprint=1347";
</script>

<Card>
  <Divider text={$_('app.step', { step: 1 })}>
    <Headline>{$_('app.title')}</Headline>
    <Subhead>{$_('app.subtitle')}</Subhead>
  </Divider>
</Card>