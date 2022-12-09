<script lang="ts">
    import {IconButton, LinearProgress} from "nunui";
    import Container from "$components/Container.svelte";
    import {onMount} from "svelte";
    import Grid from "$components/Grid.svelte";
    import Region from "$components/Region.svelte";
    import {getOne} from "$lib/get";

    export let data, info;
    let group = data.params.group, name = data.params.name;
    let clientWidth, clientHeight, width, height;
    let page = 0, maxPage = 1, ratio = 1;

    $: {
        let _width = clientWidth - 90, _height = clientHeight;
        if (_width / _height > ratio) {
            _width = _height * ratio;
        } else {
            _height = _width / ratio;
        }
        width = _width;
        height = _height;
    }

    onMount(async () => {
        const info = await getOne(group, name);
        maxPage = info.pages / 2;
        const sampleImage = `/work/${group}/${name}/0.png`;
        const img = new Image();
        img.src = sampleImage;
        img.onload = () => {
            ratio = img.naturalWidth / img.naturalHeight * 2;
        }
    });

    $: if (page < 0) page = 0;
    $: if (page > maxPage) page = maxPage;
</script>

<Container full>
    <svg width="90" height="90">
        <image xlink:href="/picture.svg" width="90" height="90"/>
    </svg>
    <h1>{name}</h1>
    <h2>@{group}</h2>
    <main bind:clientWidth bind:clientHeight>
        <IconButton icon="chevron_left" on:click={()=>page -= 1} disabled={page===0}/>
        <div style:width="{width}px" style:height="{height}px">
            <div class="image" style="background-image: url('/work/{group}/{name}/{page * 2 - 1}.png');"></div>
            <div class="image" style="background-image: url('/work/{group}/{name}/{page * 2}.png');"></div>
        </div>
        <IconButton icon="chevron_right" on:click={()=>page += 1} disabled={page===maxPage}/>
    </main>
    <LinearProgress progress={page / maxPage}/>
</Container>

<style lang="scss">
  main {
    width: 100%;
    padding-top: 20px;
    height: calc(100vh - 400px);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      .image {
        width: 50%;
        height: 100%;
      }
    }
  }
</style>