<script lang="ts">
    import Container from "$components/Container.svelte";
    import Grid from "$components/Grid.svelte";
    import Region from "$components/Region.svelte";

    let data=[
        '탑동초등학교',
        '문성중학교',
        '독산초등학교',
        '금나래초등학교',
    ]
</script>

<Container full>
    <svg width="90" height="90">
        <image xlink:href="/book.svg" width="90" height="90"/>
    </svg>
    <h1>작품 목록</h1>
    <Grid max={4}>
        {#each data as school}
            <a href="/mastar/archive/{school}">
                <Region blur={false}>
                    {school}
                </Region>
            </a>
        {/each}
    </Grid>
</Container>
