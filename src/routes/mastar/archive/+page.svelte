<script lang="ts">
    import BookSvg from "$static/book.svg?url";
    import Container from "../../../components/Container.svelte";
    import Grid from "../../../components/Grid.svelte";
    import Region from "../../../components/Region.svelte";
</script>

<Container>
    <svg width="90" height="90">
        <image xlink:href={BookSvg} width="90" height="90"/>
    </svg>
    <h1>작품 목록</h1>
    <Grid max={4}>
        {#each {length: 70} as _}
            <Region blur={false}>
                dsfasfdas
            </Region>
        {/each}
    </Grid>
</Container>
