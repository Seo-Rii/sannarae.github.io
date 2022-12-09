<script lang="ts">
    import Container from "$components/Container.svelte";
    import Region from "$components/Region.svelte";
    import Grid from "$components/Grid.svelte";
</script>

<Container full>
    <div>
        <svg width="90" height="90">
            <image xlink:href="/mountain.svg" width="90" height="90"/>
        </svg>
        <h1>산아래문화학교</h1>
        <h2>학습의 즐거움을 함께하고 생활을 나누는 마을학교입니다.</h2>
    </div>
</Container>
<Container>
    <div>
        <h1>활동 소개</h1>
        <Grid max="2">
            <a href="/mastar">
                <Region>
                    <div style="font-size: 0.8rem;">
                        <svg width="90" height="90">
                            <image xlink:href="/camera.svg" width="90" height="90"/>
                        </svg>
                        <h1>마스타</h1>
                        <h2>사진을 찍습니다. 기록을 남깁니다.</h2>
                    </div>
                </Region>
            </a>
        </Grid>
    </div>
</Container>
