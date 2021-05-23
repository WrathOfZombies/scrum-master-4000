<script>
  import { t } from "svelte-i18n";
  import {
    Header,
    HeaderUtilities,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
    Button,
    Loading
  } from "carbon-components-svelte";

  import Wizard from "./wizard";
  import ThemeSwitcher from "./theme-switcher";

  import steps from "./components/steps";
</script>

<Header company={$t('app.company')} platformName={$t('app.hero')}>
	<div slot="skip-to-content">
		<SkipToContent/>
	</div>
  <HeaderUtilities>
    <ThemeSwitcher />
  </HeaderUtilities>
</Header>

<Content>
	<Wizard steps={steps} /> 
</Content>
