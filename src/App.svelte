<script lang="ts">
  import { Loading } from 'carbon-components-svelte'
  import { isLocaleLoaded, setupI18n, dir } from './utils/locale/i18n'
  import Shell from './components/shell.svelte'

  $: if (!$isLocaleLoaded) {
    setupI18n()
  }

  $: {
    document.dir = $dir
  }
</script>

{#if $isLocaleLoaded}
  <Shell />
{:else}
  <Loading />
{/if}
