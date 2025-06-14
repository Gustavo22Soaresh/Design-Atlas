<script>
	import AtlButton from '$lib/components/atl-button.svelte';
	import AtlCheckbox from '$lib/components/atl-checkbox.svelte';
	import AtlTextInput from '$lib/components/atl-textInput.svelte';
	import AtlLabel from '$lib/components/atl-label.svelte';
	import AtlField from '$lib/components/atl-field.svelte';
</script>

<div class="wrapper">
	<div class="container">
		<h1>Welcome to your library project</h1>
		<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
		<AtlButton>buton</AtlButton>
		<AtlCheckbox>Checkbox</AtlCheckbox>
		<AtlLabel
			showDescription="true"
			description="description text is massive"
			type="required"
			label="text of the label"
		/>
		<AtlTextInput />
		<AtlField />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem;
		align-items: start;
	}
</style>
