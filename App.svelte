<script>
  import { t } from "svelte-i18n";
  import {
    Header,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
    Button,
    Loading
  } from "carbon-components-svelte";
  import { isLocaleLoaded, setupI18n, dir } from "./utils/locale/i18n";
  import Wizard from "./components/wizard";
  // import Form from "./Form.svelte";
  // import Welcome from "./components/welcome";

  $: if (!$isLocaleLoaded) {
    setupI18n({ withLocale: "en" });
  }

  $: {
    document.dir = $dir;
  }
</script>

<style>
  h1 {
    margin-bottom: "6rem";
  }
</style>

{#if $isLocaleLoaded}
<Header company={$t('app.company')} platformName={$t('app.hero')}>
	<div slot="skip-to-content">
		<SkipToContent/>
	</div>
</Header>

<Content>
	<Wizard>
    <h1>{$t('app.title')}</h1>
  </Wizard>
</Content>

{:else}
  <Loading />
{/if}