<script>
	export let type = 'inline';
	export let state = 'error';
	export let close = false;
	export let title = true;
	export let titleText = 'Title';

	let visible = true;

	const icons = {
		info: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		success: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`,
		warning: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m40-120 440-760 440 760H40Zm440-120q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z"/></svg>`,
		error: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm-40-361h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Z"/></svg>`,
		close: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm-40-361h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Z"/></svg>`
	};

	$: iconMarkup = icons[state] || '';
	$: iconMarkupClose = icons[close] || '×';
	$: showTitle = !(type === 'inline');
	$: contentColorClass =
		type === 'inline' && (state === 'success' || state === 'error')
			? `color-${state}`
			: 'color-base';

	function handleClose() {
		visible = false;
	}

	function innerHTML(node, value) {
		node.innerHTML = value;
	}
</script>

{#if visible}
	<div class="atl-alert {state} {type}">
		<div class="atl-alert-icon">
			<span class="atl-alert-icon {state}" use:innerHTML={iconMarkup}></span>
		</div>
		<div class="atl-alert-content">
			{#if showTitle && title}
				<div class="atl-alert-title">{titleText}</div>
			{/if}
			<div class="atl-alert-children-content {contentColorClass}">
				<slot />
			</div>
		</div>

		{#if close && type != 'inline'}
			<button class="atl-alert-close" on:click={handleClose}>{iconMarkupClose}</button>
		{/if}
	</div>
{/if}

<style>
	@import url(../../style/global.css);
	.atl-alert {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: auto;
		height: auto;
		gap: var(--spacing-4);
		border-radius: var(--border-radius-4);
		padding: var(--spacing-16) var(--spacing-16) var(--spacing-8) var(--spacing-8);
		padding-right: var(--spacing-24);
		border-width: var(--border-width-1);
		border-style: solid;
		box-sizing: border-box;
		border-color: transparent;
	}

	.atl-alert-icon {
		width: 24;
		height: 24;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.atl-alert-icon.info {
		width: 20;
		height: 20;
		top: 2px;
		left: 2px;

		color: var(--color-link);
	}
	.atl-alert-icon.success {
		width: 20;
		height: 20;
		top: 2px;
		left: 2px;

		color: var(--color-success);
	}
	.atl-alert-icon.warning {
		width: 20;
		height: 20;
		top: 2px;
		left: 2px;

		color: var(--color-warning);
	}
	.atl-alert-icon.error {
		width: 20;
		height: 20;
		top: 2px;
		left: 2px;

		color: var(--color-error);
	}
	.atl-alert.info {
		background: var(--bgn-info);
		border: 1px solid var(--border-color-info);
	}

	.atl-alert.success {
		background: var(--bgn-success);
		border: 1px solid var(--border-color-success);
	}

	.atl-alert.warning {
		background: var(--bgn-warning);
		border: 1px solid var(--border-color-warning);
	}

	.atl-alert.error {
		background: var(--bgn-error);
		border: 1px solid var(--border-color-error);
	}

	.atl-alert-content {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 48;
		gap: spacing/4;
	}

	.atl-alert-title {
		height: 22;
		font-weight: bold;
		font-size: var(--typography-font-size-16);
		line-height: 140%;
		letter-spacing: 0%;

		color: var(--color-base);
	}

	.atl-alert-close {
		position: absolute;
		top: var(--spacing-4);
		right: var(--spacing-4);
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		color: var(--color-typo-secondary);
	}

	.atl-alert-children-content {
		font-family: var(--typography-font-family-sans-serif);
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-16);
		line-height: 125%;
		letter-spacing: 0%;
		vertical-align: middle;

		color: var(--color-base);
	}
	.atl-alert.inline {
		width: auto;
		height: 20px;
		border-radius: var(--border-radius-4);
		border-width: var(--border-width-1);
		border-style: solid;
		border-color: transparent;
		gap: var(--spacing-4);
		padding: 0;
		align-items: center;
		background: none;
	}

	.atl-alert.inline .atl-alert-icon {
		width: 20px;
		height: 20px;
		position: relative;
		top: 0;
		left: 0;
	}

	.atl-alert.inline .atl-alert-content {
		width: auto;
		height: auto;
		gap: var(--spacing-4);
		flex-direction: row;
		align-items: center;
	}
	.color-base {
		color: var(--color-base);
	}
	.color-success {
		color: var(--color-success);
	}
	.color-error {
		color: var(--color-error);
	}
</style>
