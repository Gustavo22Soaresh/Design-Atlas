<script>
	// Valor do textarea (bind:value)
	export let value = '';
	export let placeholder = 'Placeholder';
	export let disabled = false;
	export let readonly = false;
	export let status = 'default';
	export let resizable = true;
	// Direção do redimensionamento (se permitido)
	export let resize = 'both'; // 'none', 'vertical', 'horizontal', 'both'
	export let rows = 3;
	export let width = 416;
	export let height = 208;

	// --- Reatividade para classes de status ---
	$: isSuccess = status === 'success';
	$: isError = status === 'error';

	// Atualiza o valor ao digitar
	function handleInput(event) {
		value = event.target.value;
	}
</script>

<!--
Componente TextArea customizado:
Recebe diversas props para controle de valor, tamanho, status visual e redimensionamento.
As classes success/error são aplicadas conforme o status.
O tamanho é controlado por width/height e o resize pode ser desabilitado por prop.
-->
<div class="atl-textarea-field {status}">
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
	/>
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
