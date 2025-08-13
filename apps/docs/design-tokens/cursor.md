# Cursor

| cursor                                                                                        | token                 | value |
| --------------------------------------------------------------------------------------------- | --------------------- | ----- |
| <div class="example-cursor" style="cursor:var(--cursor-default)"><p>mouse here</p></div>      | `cursor-default`      | default |
| <div class="example-cursor" style="cursor:var(--cursor-pointer)"><p>mouse here</p></div>      | `cursor-pointer`      | pointer |
| <div class="example-cursor" style="cursor:var(--cursor-disable)"><p>mouse here</p></div>      | `cursor-disable`      | default |
| <div class="example-cursor" style="cursor:var(--cursor-text)"><p>mouse here</p></div>         | `cursor-text`         | text |
| <div class="example-cursor" style="cursor:var(--cursor-not-allowed)"><p>mouse here</p></div>  | `cursor-not-allowed`  | not-allowed |
| <div class="example-cursor" style="cursor:var(--cursor-wait)"><p>mouse here</p></div>         | `cursor-wait`         | wait |
| <div class="example-cursor" style="cursor:var(--cursor-grab)"><p>mouse here</p></div>         | `cursor-grab`         | grab |
| <div class="example-cursor" style="cursor:var(--cursor-grabbing)"><p>mouse here</p></div>     | `cursor-grabbing`     | grabbing |
| <div class="example-cursor" style="cursor:var(--cursor-ew-resize)"><p>mouse here</p></div>    | `cursor-ew-resize`    | ew-resize |
| <div class="example-cursor" style="cursor:var(--cursor-ns-resize)"><p>mouse here</p></div>    | `cursor-ns-resize`    | ns-resize |
| <div class="example-cursor" style="cursor:var(--cursor-nesw-resize)"><p>mouse here</p></div> | `cursor-nesw-resize` | nesw-resize |
| <div class="example-cursor" style="cursor:var(--cursor-help)"><p>mouse here</p></div>         | `cursor-help`         | help |
| <div class="example-cursor" style="cursor:var(--cursor-copy)"><p>mouse here</p></div>         | `cursor-copy`         | copy |

<style>
    @import url(_variables.css);
        .example-cursor {
            display: flex;
            background-color: var(--bgn-base);
            height: 4rem;
            width: 6rem;
            align-items: center;
            justify-content: center;
            padding: auto;
            border: var(--border-style-base);
            border-style: dashed;
            cursor: text;
        }

</style>