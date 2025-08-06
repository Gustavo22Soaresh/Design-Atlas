<script lang="ts">
	type Status = 'default' | 'success' | 'error';
	type Resize = 'none' | 'vertical' | 'horizontal' | 'both';

	export let value: string = '';
	export let placeholder: string = 'Placeholder';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let status: Status = 'default';
	export let resizable: boolean = true;
	export let resize: Resize = 'both';
	export let rows: number = 3;
	export let width: number = 416;
	export let height: number = 208;

	$: isSuccess = status === 'success';
	$: isError = status === 'error';

	function handleInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		value = target.value;
	}
</script>

<div class="atl-textarea-field {status}" aria-roledescription="Text Area">
	<textarea
		bind:value
		placeholder={placeholder}
		{disabled}
		{readonly}
		rows={rows}
		class:success={isSuccess}
		class:error={isError}
		style="resize: {resizable ? resize : 'none'}; width: {width}px; height: {height}px;"
		on:input={handleInput}
	></textarea>
</div>

<style>
textarea {
	box-sizing: border-box;
	border: var(--border-width-1) solid var(--border-color-base);
	border-radius: var(--border-radius-4);
	background-color: transparent;
	font-size: var(--font-size-16);
	font: var(--font-family-base);
	line-height: var(--line-height-label);
	padding: 10px 12px;
	transition: border-color 0.2s;
	min-height: 40px;
}
textarea.success {
	border-color: var(--border-color-success) !important;
}
textarea.error {
	border-color: var(--border-color-error) !important;
}
textarea:focus {
	border-color: var(--border-color-focus);
	outline: none;
}
textarea:not(:disabled):not(:read-only):hover {
	border-color: var(--border-color-accent);
}
textarea:disabled {
	background: var(--bgn-base);
	cursor: not-allowed;
}
</style>
