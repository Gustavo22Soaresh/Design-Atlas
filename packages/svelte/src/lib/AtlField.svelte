<script>
	import AtlAlert from './AtlAlert.svelte';
import AtlLabel from './AtlLabel.svelte';
import AtlTextInput from './AtlTextInput.svelte';

	// Label
	export let label = '';
	export let labelIcon = '';
	export let labelDescription = '';
	export let optional = false;
	export let hideLabel = false;
	export let isFieldset = false;
	export let disabled = false;
	export let required = false;

	// Alert
	export let inlineAlert = false;
	export let status = 'default'; // 'default' | 'error' | 'warning' | 'success'
	export let alertMessage = 'Alert Message';

	// TextInput props
	export let startIcon = '';
	export let endIcon = '';
	export let clearable = true;
	export let inputType = 'text';
	export let readonly = false;
	export let placeholder = 'Placeholder';
	export let value = '';

	const showInlineAlert = inlineAlert && ['error', 'warning', 'success'].includes(status);
</script>

{#if isFieldset}
	<fieldset class="atl-fieldset" {disabled}>
		{#if !hideLabel}
			<AtlLabel
				text={label}
				icon={labelIcon}
				description={labelDescription}
				{optional}
				{required}
			/>
		{/if}

		<AtlTextInput
			{startIcon}
			{endIcon}
			{clearable}
			{inputType}
			{status}
			{disabled}
			{readonly}
			{placeholder}
			bind:value
		/>

		{#if showInlineAlert}
			<AtlAlert type="inline" state={status} title={false}>
				{alertMessage}
			</AtlAlert>
		{/if}
	</fieldset>
{:else}
	<div class="atl-field" {disabled}>
		{#if !hideLabel}
			<AtlLabel
				text={label}
				icon={labelIcon}
				description={labelDescription}
				{optional}
				{required}
			/>
		{/if}

		<AtlTextInput
			{startIcon}
			{endIcon}
			{clearable}
			{inputType}
			{status}
			{disabled}
			{readonly}
			{placeholder}
			bind:value
		/>

		{#if showInlineAlert}
			<AtlAlert type="inline" state={status} title={false}>
				{alertMessage}
			</AtlAlert>
		{/if}
	</div>
{/if}

<style>
	.atl-field,
	.atl-fieldset {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
		border: none;
		padding: 0;
		margin: 0;
	}

	fieldset:disabled {
		opacity: var(--opacity-50);
		pointer-events: none;
	}
</style>
