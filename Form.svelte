<script>
	import { FormField, Switch, TextField, Button } from "attractions";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	class Sprint {
	  constructor() {
	    this.start = 0;
	    this.added = 0;
	    this.removed = 0;
	    this.completed = 0;
	    this.qa = 0;
	    this.rest = 0;
	  }
	}

	const sprint = new Sprint();

	function submitForm() {
	  dispatch("result", sprint);
	  console.log("Hello World!", sprint);
	}
</script>

<form novalidate onsubmit={submitForm}>

	<FormField
		name="Start"
		help="Points you started the sprint with."
		required
	>
		<TextField />
	</FormField>

	<FormField
		name="Added"
		help="Points you added to the sprint"
		optional
		bind:value={sprint.added}
	>
	<TextField />
	</FormField>

	<FormField
		name="Removed"
		help="Points you removed from the sprint"
		optional
		bind:value={sprint.removed}
	>
	<TextField />
	</FormField>

	<FormField
		name="Done"
		help="Points you completed in the sprint"
		required
		bind:value={sprint.completed}
	>
	<TextField />
	</FormField>

	<FormField
		name="QA Remaining"
		help="Points still in QA"
		optional
		bind:value={sprint.qa}
	>
	<TextField />
	</FormField>

	<FormField
		name="Rest Remaining"
		help="Points still in QA"
		bind:value={sprint.rest}
	>
	<TextField />
	</FormField>

	<Button on:click={submitForm} outline>
		Calculate Metrics
	</Button>

</form>