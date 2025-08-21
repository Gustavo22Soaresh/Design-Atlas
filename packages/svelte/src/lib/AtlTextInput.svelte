<script>
	export let startIcon = '';
	export let endIcon = '';
	export let clearable = false;
	export let inputType = 'text';
	export let status = 'default'; // "default", "error", "success"
	export let disabled = false;
	export let readonly = false;
	export let placeholder = 'Placeholder';
	export let value = '';

	/*Por enquanto os icones serao colocados aqui*/
	const icons = {
		info: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		success: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		warning: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m40-120 440-760 440 760H40Zm440-120q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z"/></svg>`,
		error: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm-40-361h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Z"/></svg>`,
		close: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`,
		person: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>`
	};

	$: startIconMarkup = icons[startIcon] || '';
	$: endIconMarkup = icons[endIcon] || '';
	$: closeIconMarkup = icons['close'] || '×';
	$: isSuccess = status === 'success';
	$: isError = status === 'error';

	function handleInput(event) {
		value = event.target.value;
	}

	function clearInput() {
		value = '';
	}
</script>

<div class="atl-field {status}">
	{#if startIcon}
		<span class="icon left"> {@html startIconMarkup}</span>
	{/if}

	<input
		type={inputType}
		bind:value
		on:input={handleInput}
		class:success={isSuccess}
		class:error={isError}
		{placeholder}
		{disabled}
		{readonly}
		style="padding-left: {startIcon ? '36px' : '12px'}; padding-right: {endIcon || clearable
			? '36px'
			: '12px'};"
	/>
	{#if clearable && value && !readonly && !disabled}
		<button class="clear-button" type="button" on:click={clearInput} aria-label="Limpar campo">
			{@html closeIconMarkup}
		</button>
	{/if}

	{#if endIcon}
		<span class="icon right end-icon">
			{@html endIconMarkup}
		</span>
	{/if}
</div>

<style>
	.atl-field {
		position: relative;
		display: inline-flex;
		align-items: center;
		width: 100%;
		max-width: var(--size-416);
		height: var(--size-40);
	}

	input {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: var(--border-width-1) solid var(--border-color-base);
		border-radius: var(--border-radius-4);
		background-color: transparent;
		font-size: var(--font-size-16);
		line-height: var(--line-height-label);
		padding-left: 12px;
		padding-right: 12px;

		&:focus {
			border-color: var(--border-color-focus);
		}
	}
	input:not(:disabled):not(:read-only):hover {
		border-color: var(--border-color-accent);
	}
	input:disabled {
		background: var(--bgn-base);
		cursor: not-allowed;
	}

	input.success {
		border-color: var(--border-color-success);
	}

	input.error {
		border-color: var(--border-color-error);
	}

	.atl-field:has(input:disabled) .icon {
		opacity: var(--opacity-30);
	}
	.atl-field:has(input:read-only) .icon {
		opacity: var(--opacity-50);
	}
	.icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		pointer-events: none;
	}

	.icon.left {
		left: var(--spacing-8);
	}

	.icon.right {
		right: var(--spacing-8);
		pointer-events: auto;
	}
	.clear-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: var(--spacing-12);
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		z-index: 1;
	}

	.clear-button:hover {
		opacity: var(--opacity-80);
	}

	.icon.right.end-icon {
		right: var(--spacing-8);
	}
	:focus {
    outline: none;
	}
</style>
