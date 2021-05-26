<script lang="ts">
  import { HeaderGlobalAction } from 'carbon-components-svelte'
  import LightIcon from 'carbon-icons-svelte/lib/Light16'
  import DarkIcon from 'carbon-icons-svelte/lib/LightFilled16'

  let isLightTheme = false
</script>

<HeaderGlobalAction
  aria-label="Toggle theme"
  icon={isLightTheme ? LightIcon : DarkIcon}
  on:click={() => (isLightTheme = !isLightTheme)}
/>
