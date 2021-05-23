<script>
	import { t } from "svelte-i18n";
	import { Form, Grid, Row, NumberInput } from "carbon-components-svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	const sprint = {
	  start: 0,
	  added: 0,
	  removed: 0,
	  done: 0,
	  qa: 0,
	  rest: 0
	};

	function submitForm() {
	  dispatch("result", sprint);
	}
</script>

<Form>
	<Grid padding fullWidth>
	{#each Object.keys(sprint) as metric (metric)}
		<Row>
			<NumberInput
				label={$t(`form.${metric}`)}
				helperText={$t(`form.${metric}Label`)}
				size="xl" 
				required
				bind:value={sprint[metric]}
			/>
		</Row>
	{/each}
	</Grid>
</Form>