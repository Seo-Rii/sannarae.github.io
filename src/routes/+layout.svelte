<script lang="ts">
    import Nav from '$lib/Nav.svelte'
    import {page} from '$app/stores'

    let scrollY, path = [];

    function setPath(newPath) {
        const target = newPath.split('/').slice(1);
        if (target[0] === 'mastar') {
            if (target[1] === 'archive') path = ['마스타', '작품'];
            else path = ['마스타'];
        } else path = [];
    }

    $: setPath($page.url.pathname);
</script>

<svelte:window bind:scrollY/>

<main>
    <slot/>
    <div style="height: 200px;"></div>
</main>
<Nav top={!!scrollY} {path}/>

<style lang="scss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  :global {
    :root {
      --mt-on-primary: #00000066;
      --mt-on-surface: #00000066;
    }

    * {
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    html, body, body > * {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  main {
    height: 100%;
  }
</style>
