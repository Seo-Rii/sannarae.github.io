<script lang="ts">
    import CameraSvg from "$static/camera.svg?url";
    import Container from "$components/Container.svelte";
    import Region from "$components/Region.svelte";
    import Grid from "$components/Grid.svelte";
</script>

<Container full>
    <div>
        <svg width="90" height="90">
            <image xlink:href={CameraSvg} width="90" height="90"/>
        </svg>
        <h1>마스타</h1>
        <h2 style="font-weight: 300;">우리의 일상을 작품으로 만듭니다.</h2>
        <Grid max="2">
            <a href="/mastar/archive">
                <Region>작품 보기</Region>
            </a>
            <a href="mailto:dlwlstjgus@naver.com ">
                <Region>문의하기</Region>
            </a>
        </Grid>
    </div>
</Container>
<Container>
    <h1>마스타는 ㅇㅇㅇ입니다.</h1>
    <p>어쩌구저쩌구 ㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ</p>
</Container>
<Container>
    <h1>마스타는 ㅇㅇㅇ입니다.</h1>
    <p>어쩌구저쩌구 ㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ</p>
</Container>
<Container>
    <h1>마스타는 ㅇㅇㅇ입니다.</h1>
    <p>어쩌구저쩌구 ㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ</p>
</Container>
