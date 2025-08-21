<script>
    import AtlLabel from "./AtlLabel.svelte";

    // Select variables
    export let options = [];
    export let display_func = a => a;
    export let index = -1;
    export let value;
    export let disabled = false;
    export let placeholder = "Select an option";
    export let variant = "default";
    export let icon = null;

    // Label variables
    export let id = '';
	export let label = 'Label';
	export let optional = false;
	export let visuallyHidden = false;
	export let isLegend = false;
	export let required = false;
	export let description = '';

    let isOpen = false;
    let dropdownRef;
    let buttonId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    let keyboardNavigation = false;

$: {
    value = index >= 0 ? options[index] : undefined;
}

function toggleDropdown() {
    if (disabled) return;
    isOpen = !isOpen;
}

function selectOption(i) {
    index = i;
    isOpen = false;
    keyboardNavigation = false;
}

function handleKeydown(event) {
    if (disabled) return;
    
    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault();
            toggleDropdown();
            break;
        case 'Escape':
            isOpen = false;
            break;
        case 'ArrowDown':
            event.preventDefault();
            keyboardNavigation = true;
            if (!isOpen) {
                isOpen = true;
            } else if (index < options.length - 1) {
                index = index + 1;
            }
            break;
        case 'ArrowUp':
            event.preventDefault();
            keyboardNavigation = true;
            if (!isOpen) {
                isOpen = true;
            } else if (index > 0) {
                index = index - 1;
            }
            break;
        case 'Home':
            event.preventDefault();
            keyboardNavigation = true;
            index = 0;
            break;
        case 'End':
            event.preventDefault();
            keyboardNavigation = true;
            index = options.length - 1;
            break;
    }
}

function handleClickOutside(event) {
    if (dropdownRef && !dropdownRef.contains(event.target)) {
        isOpen = false;
    }
}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="select-wrapper">
    {#if label}
        <AtlLabel {id} {label} {optional} {visuallyHidden} {isLegend} {required} {description}/>
    {/if}
    
    <div class="dropdown-container" bind:this={dropdownRef}>
        <button
            type="button"
            id={buttonId}
            class="dropdown-trigger"
            class:variant-default={variant === 'default'}
            class:variant-active={variant === 'active'}
            class:variant-icon={variant === 'icon'}
            class:has-icon={icon}
            class:is-open={isOpen}
            {disabled}
            on:click={toggleDropdown}
            on:keydown={handleKeydown}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={label || placeholder}
        >
            {#if icon}
                <span class="dropdown-icon">
                    {@html icon}
                </span>
            {/if}
            
            <span class="dropdown-text" class:is-placeholder={index === -1}>
                {index >= 0 ? display_func(value) : placeholder}
            </span>
            
            <span class="dropdown-arrow" class:rotated={isOpen}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
            </span>
        </button>
        
        {#if isOpen}
            <ul class="dropdown-menu" role="listbox" aria-labelledby={buttonId}>
                {#each options as option, i}
                    <li
                        class="dropdown-item"
                        class:selected={i === index}
                        class:keyboard-mode={keyboardNavigation}
                        role="option"
                        aria-selected={i === index}
                        on:click={() => selectOption(i)}
                        on:keydown={(e) => e.key === 'Enter' && selectOption(i)}
                        tabindex="-1"
                    >
                        {display_func(option)}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
    
</div>

<style>
.select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: var(--font-family-base);
}

.dropdown-container {
    position: relative;
    display: inline-block;
}

.dropdown-trigger {
    background: none;
    border: none;
    outline: none;
    
    display: flex;
    align-items: center;
    width: 248px;
    height: 40px;
    padding: 10px 12px;
    box-sizing: border-box;
    
    background-color: var(--bgn-base);
    border: 1px solid var(--color-base);
    border-radius: 6px;
    
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--color-base);
    text-align: left;
    
    cursor: pointer;
    
    transition: border-color 0.2s, box-shadow 0.2s;
}

.dropdown-trigger:hover:not(:disabled) {
    border-color: var(--color-accent);
}

.dropdown-trigger:focus,
.dropdown-trigger.is-open {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 1px var(--color-accent);
}

.dropdown-trigger.variant-active {
    border-color: var(--color-accent);
}

.dropdown-trigger.has-icon {
    padding-left: 40px;
}

.dropdown-trigger:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--bgn-disable);
}

.dropdown-icon {
    position: absolute;
    left: 12px;
    color: var(--color-base);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropdown-icon :global(svg) {
    width: 16px;
    height: 16px;
    color: inherit;
    fill: currentColor;
}

.dropdown-text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.dropdown-text.is-placeholder {
    color: var(--color-subtle);
}

.dropdown-arrow {
    margin-left: auto;
    color: var(--color-base);
    transition: transform 0.2s;
}

.dropdown-arrow.rotated {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin: 4px 0 0 0;
    padding: 4px 0;
    list-style: none;
    
    background-color: var(--bgn-base);
    border: 1px solid var(--color-base);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    max-height: 200px;
    overflow-y: auto;
}

.dropdown-item {
    padding: 8px 12px;
    font-size: 14px;
    color: var(--color-base);
    cursor: pointer;
    transition: background-color 0.2s;
}

.dropdown-item:hover {
    background-color: var(--color-accent) !important;
    color: var(--color-inverse) !important;
}

.dropdown-item {
  color: var(--color-base);
}

.dropdown-item.selected {
  background-color: var(--color-accent);
  color: var(--color-inverse);
}

/* When any item is on hover */
.dropdown-menu:has(.dropdown-item:hover) .dropdown-item {
  color: var(--color-base); 
  background-color: var(--bgn-base);
}

/* The hovered item has highlight */
.dropdown-menu .dropdown-item:hover {
  background-color: var(--color-accent);
  color: var(--color-inverse);
}

.dropdown-item:focus {
    outline: none;
    background-color: var(--color-accent);
    color: var(--color-inverse);
}

@media (max-width: 768px) {
    .dropdown-trigger {
        width: 100%;
        height: 44px;
        font-size: 16px;
    }
    
    .dropdown-menu {
        max-height: 40vh;
    }
}
</style>