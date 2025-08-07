<script>
  export let checked = false;
  export let error = false;

  function toggleCheckbox() {
    checked = !checked;
  }
</script>

<div class="atl-checkbox">
  <input
    type="checkbox"
    bind:checked
    class={error ? 'error' : ''}
    on:click={toggleCheckbox}
  />
  <slot />
</div>

<style>
  :root {
    --icon-check: url("data:image/svg+xml,%3Csvg width='1.25rem' height='1.25rem' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_1459_1729' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1459_1729)'%3E%3Cpath d='M8.33336 10.9167L13.0834 6.16671C13.3472 5.90282 13.6354 5.77087 13.9479 5.77087C14.2604 5.77087 14.5486 5.90282 14.8125 6.16671C15.0764 6.4306 15.2084 6.72226 15.2084 7.04171C15.2084 7.36115 15.0764 7.65282 14.8125 7.91671L9.20836 13.5417C8.95836 13.7917 8.66322 13.9167 8.32294 13.9167C7.98266 13.9167 7.68752 13.7917 7.43752 13.5417L5.16669 11.2709C4.9028 11.007 4.77433 10.7153 4.78127 10.3959C4.78822 10.0764 4.92363 9.78476 5.18752 9.52087C5.45141 9.25699 5.74308 9.12504 6.06252 9.12504C6.38197 9.12504 6.67363 9.25699 6.93752 9.52087L8.33336 10.9167Z' fill='white'/%3E%3C/g%3E%3C/svg%3E");
  }
/*checkbox*/
.atl-checkbox {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    width: fit-content;

    input[type="checkbox"] {
        display: flex;
        justify-content: center;
        align-items:center;
        appearance: none;
        height: var(--size-16);
        width: var(--size-16);
        background-color: transparent;
        border-radius: var(--border-radius-4);
        border: var(--border-width-2) solid var(--border-color-base);
        outline: none;
        cursor: pointer;
    
        &:hover {
            background-color: var(--bgn-foreground);
        }
    
        &:checked {
            background-color: var(--bgn-accent);
            border-color: var(--border-color-accent);
    
            &:hover {
                background-color: var(--bgn-accent-hover);
                border-color: var(--color-accent-hover);
            }
    
            &:after {
                content: '';
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background-image: var(--icon-check);
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    
        &.error {
            border-color: var(--border-color-error);
    
            &:hover {
                background-color: var(--bgn-error);
            }
    
            &:checked {
                background-color: var(--bgn-danger);
                border-color: var(--border-color-error);
        
                &:hover {
                    background-color: var(--bgn-danger-hover);
                    border-color: var(--bgn-danger-hover);
                }
            }
        }
    }
}
</style>