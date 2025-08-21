<script lang="ts">
    import AtlLabel from "./atl-label.svelte";

    // Radio variables
    export let options = [];
    export let value;
    export let name = `radio-${Math.random().toString(36).slice(2)}`;
    export let disabled: boolean = false;

    // Label variables (mesmos do select)
    export let id: string = '';
    export let label: string = 'Label';
    export let optional: boolean = false;
    export let visuallyHidden: boolean = false;
    export let isLegend: boolean = false;
    export let required: boolean = false;
    export let description: string = '';
</script>

<div class="radio-group-wrapper">
    {#if label}
        <AtlLabel
            {id}
            {label}
            {optional}
            {visuallyHidden}
            {isLegend}
            {required}
            {description}
        />
    {/if}

    <div class="radio-group">
        {#each options as option}
            <label class="radio-option">
                <input
                    type="radio"
                    name={name}
                    value={option.key}
                    bind:group={value}
                    disabled={disabled || option.disabled}
                />
                <span>{option.text}</span>
            </label>
        {/each}
    </div>
</div>

<style>

.radio-group-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: var(--font-family-base);
}

.radio-group {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.radio-option input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-base); 
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    margin: 0;
    flex-shrink: 0;
    background-color: transparent;
    transition: border-width 0.2s, box-shadow 0.2s;
}

/* efeito “borda mais grossa para dentro” quando selecionado */
.radio-option input:checked:not(:disabled) {
    border-color: var(--color-accent);
    border-width: 7px; /* aumenta a borda */
    box-sizing: border-box;
}

/* opcional: efeito hover */
.radio-option input:hover:not(:checked) {
    border-color: var(--border-color-accent);
    background-color: var(--color-foreground);   
}

.radio-option input:hover:checked {
    border-color: var(--color-accent-hover);
}

.radio-option input:focus {
    outline: none; 
    border-color: var(--border-color-focus); 
}

.radio-option input:focus-visible {
    outline: none;
    border-color: var(--border-color-focus);
    box-shadow: 0 0 0 3px var(--border-color-focus);
}

.radio-option input:disabled:not(:checked) {
    cursor: not-allowed;
    background-color: var(--color-disable) ;
    border-color: var(--color-base);
}

.radio-option input:disabled:hover {    
    cursor: not-allowed;
    background-color: var(--color-disable) ;
    border-color: var(--color-base);
}

.radio-group input:disabled:checked {
    margin-left: 2px;
}

.radio-option input:disabled:checked {
    cursor: not-allowed;
    background-color: var(--color-base);
    border-width: 6px;
    border-color: var(--color-disable);
    box-shadow: 0 0 0 2px var(--color-base);
    width: 16px;
    height: 16px;
}

</style>
