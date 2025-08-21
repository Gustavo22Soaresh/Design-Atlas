<script lang="ts">
    import { onMount } from 'svelte';
    import AtlLabel from './AtlLabel.svelte';
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
    export let autosize: boolean = false;
    export let useRowsHeight: boolean = true; // If false, use pixels height
    let textareaEl: HTMLTextAreaElement;
    let baseHeight: number = 0;

    // Label variables
    export let id: string = '';
    export let label: string = 'Label';
    export let optional: boolean = false;
    export let visuallyHidden: boolean = false;
    export let isLegend: boolean = false;
    export let required: boolean = false;
    export let description: string = '';

    $: isSuccess = status === 'success';
    $: isError = status === 'error';

    function calculateBaseHeight() {
        if (!textareaEl) return;
        const currentValue = textareaEl.value;
        textareaEl.value = '';
        textareaEl.style.height = 'auto';
        
        const testText = Array(rows).fill('A').join('\n');
        textareaEl.value = testText;
        
        baseHeight = textareaEl.scrollHeight;
        
        textareaEl.value = currentValue;
    }

    function resizeToFit() {
        if (!textareaEl) return;
        
        if (autosize) {
            textareaEl.style.height = 'auto';
            const newHeight = Math.max(textareaEl.scrollHeight, baseHeight);
            textareaEl.style.height = `${newHeight}px`;
        } else {
            // If autosize is false, use rows height
            textareaEl.style.height = `${baseHeight}px`;
        }
    }

    function handleInput(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        value = target.value;
        if (autosize) {
            resizeToFit();
        }
    }

    onMount(() => {
        if (useRowsHeight) {
            calculateBaseHeight();
            resizeToFit();
        }
    });

    $: if (textareaEl && rows && useRowsHeight) {
        calculateBaseHeight();
        resizeToFit();
    }
</script>

<div class="atl-textarea-field {status}" aria-roledescription="Text Area">
    {#if label}
        <AtlLabel {id} {label} {optional} {visuallyHidden} {isLegend} {required} {description}/>
    {/if}
    <textarea
        bind:this={textareaEl}
        bind:value
        {placeholder}
        {disabled}
        {readonly}
        {rows}
        class:success={isSuccess}
        class:error={isError}
        on:input={handleInput}
        style="
            resize: {autosize ? 'vertical' : resizable ? resize : 'none'};
            width: {width}px;
            {useRowsHeight 
                ? (autosize ? 'height: auto;' : `height: ${baseHeight}px;`) + (autosize ? ` min-height: ${baseHeight}px;` : '')
                : (autosize ? 'height: auto;' : `height: ${height}px;`)
            }
        "
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
    overflow-y: hidden; 
    margin-top: var(--spacing-4);
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