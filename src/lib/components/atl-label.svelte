<script>
	export let inputId = '';
	export let label = 'Label';
	export let description = '';
	export let showDescription = false;

	export let required = false;
	export let optional = false;
	export let optionalFlag = "(optional)";

</script>

<div class="atl-label">
	<label for={inputId}>
		<slot />

		{#if required}
			<span aria-hidden="true" style="color: var(--red-500);">*</span>
		{/if}

		{#if optional}
			<span class="label regular color-subtle"> {optionalFlag} </span>
		{/if}
	</label>

	{#if showDescription && description}
		<span
			class="label regular color-subtle"
			id={`${inputId}-description`}
		>
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

