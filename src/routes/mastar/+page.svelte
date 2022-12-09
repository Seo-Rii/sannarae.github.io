<script lang="ts">
    import Container from "$components/Container.svelte";
    import Region from "$components/Region.svelte";
    import Grid from "$components/Grid.svelte";
</script>

<Container full>
    <div>
        <svg width="90" height="90">
            <image xlink:href="/camera.svg" width="90" height="90"/>
        </svg>
        <h1>마스타</h1>
        <h2 style="font-weight: 300;">우리의 일상을 작품으로 만듭니다.</h2>
        <Grid max="2">
            <a href="/mastar/archive">
                <Region>
                    <svg width="35" height="35">
                        <image xlink:href="/book.svg" width="35" height="35"/>
                    </svg>
                    <span>작품 보기</span>
                </Region>
            </a>
            <a href="mailto:dlwlstjgus@naver.com ">
                <Region>
                    <svg width="35" height="35">
                        <image xlink:href="/letter.svg" width="35" height="35"/>
                    </svg>
                    <span>문의하기</span>
                </Region>
            </a>
        </Grid>
    </div>
</Container>

<Container>
    <img src="/poster-1.png">
</Container>
<Container>
    <h1>마스타는 사진을 찍습니다.</h1>
    <p>일상 속에서 아름다운 것을 찍습니다.</p>
</Container>
<Container>
    <h1>마스타는 앨범을 만듭니다.</h1>
    <p>사진이 오래오래 남을 수 있도록, 앨범으로 만듭니다.</p>
</Container>