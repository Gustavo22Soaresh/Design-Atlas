<script>
	export let id = ''; // mesmo ID usado no <input>
	export let label = 'Label';
	export let type = '';
	export let description = '';
	export let showDescription = false;

	$: isRequired = type === 'required';
	$: isOptional = type === 'optional';
</script>

<div class="atl-label">
	<label for={id}>
		{label}
		{#if isRequired}
			<span aria-hidden="true" style="color: var(--red-500);">*</span>
		{/if}
		{#if isOptional}
			<span class="label regular color-subtle">(opcional)</span>
		{/if}
	</label>

	{#if showDescription && description}
		<span class="label regular color-subtle" id={`${id}-description`}>
			{description}
		</span>
	{/if}
</div>

<style>
	@import url(../../style/global.css);
	.atl-label {
		display: flex;
		flex-direction: column;
		gap: 0px;
		width: fit-content;
	}
</style>
