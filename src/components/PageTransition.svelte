<script lang="ts">
    import TransitionInnerBlur from "$components/TransitionInnerBlur.svelte";

    export let url = "";
</script>


{#key url.toString()}
    <TransitionInnerBlur>
        <slot/>
    </TransitionInnerBlur>
{/key}