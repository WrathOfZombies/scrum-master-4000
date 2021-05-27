<script lang="typescript">
  //   import { t } from 'svelte-i18n'
  import { Form, Grid, Row, Button, Column } from 'carbon-components-svelte'
  //   import { currentSprint, SprintMetric } from '../../utils/store/sprint'
  import Copy from 'carbon-icons-svelte/lib/Copy16'
</script>

<Form>
  <Grid padding fullWidth>
    <Row>
      <Column>
        <Button icon={Copy} />
      </Column>
    </Row>
  </Grid>
</Form>
