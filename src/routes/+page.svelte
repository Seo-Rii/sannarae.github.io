<script lang="ts">
    import MountainSvg from "$static/mountain.svg?url";
    import Container from "$components/Container.svelte";
</script>

<Container full>
    <div>
        <svg width="90" height="90">
            <image xlink:href={MountainSvg} width="90" height="90"/>
        </svg>
        <h1>산아래문화학교</h1>
        <h2 style="font-weight: 300;">학습의 즐거움을 함께하고 생활을 나누는 마을학교입니다.</h2>
    </div>
</Container>
<a href="/mastar">마스타</a>
