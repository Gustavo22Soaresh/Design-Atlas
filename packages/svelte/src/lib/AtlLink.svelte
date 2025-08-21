<script lang="ts">
  export let href: string | undefined = undefined;
  export let external: boolean = false;
  export let asChild: boolean = false;
  export let className: string = "";
  
  export let variant: 'underline' | 'basic' = 'underline';
  export let icon: string | null = null;
  export let leftIcon: boolean = false;

  $: rel = external ? "noopener noreferrer" : undefined;
  $: target = external ? "_blank" : undefined;

  const baseClass = "atl-link";
  $: variantClass = variant === 'underline' ? 'atl-link--underline' : 'atl-link--basic';
</script>

{#if asChild}
  <slot class={`${baseClass} ${variantClass} ${className}`} />
{:else}
  <a
    href={href}
    rel={rel}
    target={target}
    class={`${baseClass} ${variantClass} ${className}`}
  >
    {#if icon && leftIcon}
      <span class="atl-link__icon">{@html icon}</span>
    {/if}
    
    <slot />

    {#if icon && !leftIcon}
      <span class="atl-link__icon">{@html icon}</span>
    {/if}
  </a>
{/if}

<style>
  .atl-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s;
    vertical-align: bottom;
  }

  /* Variantes */
  .atl-link--underline {
    text-decoration: underline;
    color: inherit;
  }

  .atl-link--underline:hover {
    color: var(--color-link) !important;
  }

  .atl-link--underline:active {
    color: var(--color-link-active) !important;
  }

  .atl-link--underline:visited:not(:active) {
    text-decoration: none;
    color: var(--color-link-visited);
  }

  .atl-link--basic {
    text-decoration: none;
    color: var(--color-link);
  }

  .atl-link--basic:hover {
    text-decoration: underline;
    color: var(--color-link) !important;
  }

  .atl-link--basic:active {
    color: var(--color-link-active);
  }

  .atl-link--basic:visited:not(:active) {
    color: var(--color-link-visited);
  }

  .atl-link__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
</style>
