<script>
  import { HeaderGlobalAction } from "carbon-components-svelte";
  import { Light, LightFilled } from "carbon-icons-svelte/lib";

  let isLightTheme = false;
</script>

<HeaderGlobalAction
  aria-label="Toggle theme"
  icon={isLightTheme ? Light : LightFilled}
  on:click={() => (isLightTheme = !isLightTheme)}
/>

