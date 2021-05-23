<script lang="ts">
  import { t } from 'svelte-i18n'
  import { Header, HeaderUtilities, SkipToContent, Content } from 'carbon-components-svelte'

  import Wizard from './wizard.svelte'
  import ThemeSwitcher from './theme-switcher.svelte'
  import steps from './steps'
</script>

<Header company={$t('app.company')} platformName={$t('app.hero')}>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderUtilities>
    <ThemeSwitcher />
  </HeaderUtilities>
</Header>

<Content>
  <p>Hello World!</p>
  <Wizard {steps} />
</Content>
