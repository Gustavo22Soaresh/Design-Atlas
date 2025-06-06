<script>
	export let type = 'box';
	export let state = 'success';
	export let close = false;
	export let title = true;
	export let titleText = 'Title';
	// TODO type: inline
	let visible = true;

	const icons = {
		info: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,
		success: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,
		warning: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z"/></svg>`,
		error: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm0-80 321-321-321-321-321 321 321 321Zm0-281q17 0 28.5-11.5T520-480v-160q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v160q0 17 11.5 28.5T480-440Zm0 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0-160Z"/></svg>`
	};

	$: iconMarkup = icons[state] || '';

	function handleClose() {
		visible = false;
	}

	function innerHTML(node, value) {
		node.innerHTML = value;
	}
</script>

{#if visible}
	<div class="atl-alert {state}">
		<div class="atl-alert-icon">
			<spam class="atl-alert-icon {state}" use:innerHTML={iconMarkup}></spam>
		</div>
		<div class="atl-alert-content">
			{#if title}
				<div class="atl-alert-title">{titleText}</div>
			{/if}
			<slot class="atl-alert-children-content" />
		</div>

		{#if close}
			<button class="atl-alert-close" on:click={handleClose}>×</button>
		{/if}
	</div>
{/if}

<style>
	.atl-alert {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 372px;
		height: 80px;
		gap: var(--spacing-4);
		border-radius: var(--border-radius-4);
		padding: var(--spacing-16) var(--spacing-16) var(--spacing-16) var(--spacing-8);
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
		border-top: 1px solid var(--border-color-info);
	}

	.atl-alert.success {
		background: var(--bgn-success);
		border-top: 1px solid var(--border-color-success);
	}

	.atl-alert.warning {
		background: var(--bgn-warning);
		border-top: 1px solid var(--border-color-warning);
	}

	.atl-alert.error {
		background: var(--bgn-error);
		border-top: 1px solid var(--border-color-error);
	}

	.atl-alert-content {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 348;
		height: 48;
		gap: spacing/4;
	}

	.atl-alert-title {
		width: 320;
		height: 22;

		font-family: Inter;
		font-weight: var(--typography-font-weight-semibold);
		font-size: var(--typography-font-size-16);
		line-height: 140%;
		letter-spacing: 0%;

		color: var(--color-base);
	}

	.atl-alert-close {
		background: none;
		border: none;
		font-size: 16px;
		cursor: pointer;
		color: var(--color-typo-secondary);
		padding: 0;
		margin-left: var(--spacing-8);
	}

	.atl-alert-children-content {
		width: 320;
		height: 20;

		font-family: var(--typography-font-family-sans-serif);
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-16);
		line-height: 125%;
		letter-spacing: 0%;
		vertical-align: middle;

		color: var(--color-base);
	}
</style>
