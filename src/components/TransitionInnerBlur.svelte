<script lang="ts">
    import {blur} from "svelte/transition";
    import {writable} from "svelte/store";
    import {cubicOut} from "svelte/easing";

    let out = writable(false), node;

    function fadeIn(node: Element, params: any) {
        const {
            radius = 5,
            inverse = false,
            delay = 0,
            duration = 400,
            easing = cubicOut,
        } = params;

        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			opacity: ${t};
			filter: blur(${(inverse ? t : u) * radius}px);
			transform: translateY(${(1 - t) * 10}px);
		`
        };
    }
</script>

<div in:fadeIn|local={{delay:400, duration:400}}
     out:blur|local={{duration: 400}}
     on:outroend={() => $out = true}
     style="height: 100%;transition: background-color 0.3s ease, color 0.3s ease;"
     bind:this={node}>
    {#if !$out}
        <slot/>
    {/if}
</div>
