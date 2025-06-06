<script>
	import AtlLabel from './atl-label.svelte';
	import AtlTextInput from './atl-textInput.svelte';

	export let fieldType = 'default';
	export let showLabel = true;
	export let feedback = false;

	export let labelState = 'none';
	export let description = '';
	export let showDescription = false;
	export let label = 'Label';

	export let inputType = 'default';
	export let status = 'default';
	export let inputState = 'not filled';
	export let iconLeft = false;
	export let iconRight = false;
	export let placeholder = 'Placeholder';
	export let value = '';
</script>

<div class="atl-field-container">
	{#if showLabel}
		<AtlLabel {label} state={labelState} {description} {showDescription} />
	{/if}

	<AtlTextInput
		type={inputType}
		{status}
		state={inputState}
		{iconLeft}
		{iconRight}
		{placeholder}
		bind:value
	/>

	{#if feedback}
		<span class="atl-field-feedback">Alert</span>
	{/if}
</div>

<style>
	.atl-field-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-8);
		width: 272px;
		min-width: 272px;
		max-width: 416px;
		height: 68px;
	}

	.atl-field-feedback {
		color: var(--color-feedback);
		font-size: var(--typography-font-size-12);
	}
</style>
