<script lang="ts">
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import Region from "$components/Region.svelte";
    import {onMount} from "svelte";
    import {getGroup} from "$lib/get";

    export let data, info;
    let group = data.params.group;

    onMount(async () => {
        info = await getGroup(group);
    });
</script>

<Container full>
    <svg width="90" height="90">
        <image xlink:href="/school.svg" width="90" height="90"/>
    </svg>
    <h1>{group}</h1>
    <Grid max={4}>
        {#each info || [] as {name}}
            <a href="/mastar/archive/{group}/{name}">
                <Region blur={false}>
                    {name}
                </Region>
            </a>
        {/each}
    </Grid>
</Container>
