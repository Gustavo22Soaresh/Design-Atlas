<script>
	import { onMount, onDestroy } from 'svelte';

	let tooltipVisible = false;
	let tooltipId = `atl-tooltip-${Math.random().toString(36).slice(2, 8)}`;
	let longPressTimeout;
	let isTouch = false;

	export let text = '';
	export let direction = 'bottom';
	export let delay = 500;

	let triggerEl;

	function showTooltip() {
		tooltipVisible = true;
	}

	function hideTooltip() {
		tooltipVisible = false;
	}

	function onKeyDown(event) {
		if (event.key === 'Escape') {
			hideTooltip();
		}
	}

	function onDocumentClick(event) {
		if (!triggerEl.contains(event.target)) {
			hideTooltip();
		}
	}

	function handleTouchStart() {
		isTouch = true;
		longPressTimeout = setTimeout(() => {
			showTooltip();
		}, delay);
	}

	function handleTouchEnd() {
		clearTimeout(longPressTimeout);
		// tooltip permanece visível
	}

	function handleMouseEnter() {
		if (!isTouch) showTooltip();
	}

	function handleMouseLeave() {
		if (!isTouch) hideTooltip();
	}

	function handleFocus() {
		if (!isTouch) showTooltip();
	}

	function handleBlur() {
		if (!isTouch) hideTooltip();
	}

	onMount(() => {
		document.addEventListener('keydown', onKeyDown);
		document.addEventListener('click', onDocumentClick);
	});

	onDestroy(() => {
		document.removeEventListener('keydown', onKeyDown);
		document.removeEventListener('click', onDocumentClick);
	});
</script>

<div class="atl-tooltip" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} role="tooltip">
	<button
		class="unstyled-button"
		bind:this={triggerEl}
		on:focus={handleFocus}
		on:blur={handleBlur}
		on:touchstart={handleTouchStart}
		on:touchend={handleTouchEnd}
		aria-describedby={tooltipId}
		tabindex="0"
	>
		<slot />
	</button>

	{#if tooltipVisible}
		<span
			id={tooltipId}
			role="tooltip"
			class="tooltip-text {direction}"
			aria-hidden={!tooltipVisible}
		>
			{text}
		</span>
	{/if}
</div>

<style>
	@import url(global.css);

	.unstyled-button {
		all: unset;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.atl-tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip-text {
		position: absolute;
		background-color: var(--color-base);
		color: var(--color-inverse);
		padding: var(--spacing-8) var(--spacing-4);
		font-size: var(--font-size-12);
		line-height: var(--line-height-label);
		white-space: nowrap;
		border-radius: var(--border-radius-4);
		z-index: 10;
		transition: opacity 0.2s ease;
		opacity: 1;
		pointer-events: none;
	}

	.tooltip-text.top {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.top-start {
		bottom: 100%;
		left: 0;
		transform: translateY(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.top-end {
		bottom: 100%;
		right: 0;
		transform: translateY(calc(-1 * var(--spacing-8)));
	}

	.tooltip-text.bottom {
		top: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(var(--spacing-8));
	}
	.tooltip-text.bottom-start {
		top: 100%;
		left: 0;
		transform: translateY(var(--spacing-8));
	}
	.tooltip-text.bottom-end {
		top: 100%;
		right: 0;
		transform: translateY(var(--spacing-8));
	}

	.tooltip-text.left {
		top: 50%;
		right: 100%;
		transform: translateY(-50%) translateX(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.left-start {
		top: 0;
		right: 100%;
		transform: translateX(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.left-end {
		bottom: 0;
		right: 100%;
		transform: translateX(calc(-1 * var(--spacing-8)));
	}

	.tooltip-text.right {
		top: 50%;
		left: 100%;
		transform: translateY(-50%) translateX(var(--spacing-8));
	}
	.tooltip-text.right-start {
		top: 0;
		left: 100%;
		transform: translateX(var(--spacing-8));
	}
	.tooltip-text.right-end {
		bottom: 0;
		left: 100%;
		transform: translateX(var(--spacing-8));
	}
</style>
