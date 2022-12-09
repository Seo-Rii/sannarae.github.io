<script lang="ts">
    import {ThemeProvider} from "nunui";
    import BlurBackground from "$components/BlurBackground.svelte";
    import Nav from '$lib/Nav.svelte'
    import PageTransition from "$components/PageTransition.svelte";
    import {page} from "$app/stores";

    export let data;
    let scrollY, path = [];

    function setPath(newPath) {
        const target = newPath.split('/').slice(1);
        path = [];
        if (target[0] === 'mastar') {
            path.push({text: '마스타', link: '/mastar'});
            if (target[1] === 'archive') {
                path.push({text: '작품', link: '/mastar/archive'});
                if (target[2]) {
                    path.push({text: decodeURIComponent(target[2]), link: `/mastar/archive/${target[2]}`});
                    if (target[3]) {
                        path.push({
                            text: decodeURIComponent(target[3]),
                            link: `/mastar/archive/${target[2]}/${target[3]}`
                        });
                    }
                }
            }
        }
        path = path;
    }

    $: setPath($page.url.pathname);
</script>

<svelte:window bind:scrollY/>
<svelte:head>
    <title>산아래문화학교</title>
</svelte:head>

<ThemeProvider primary="#333">
    <BlurBackground>
        <PageTransition url={data.url} blur>
            <main>
                <slot/>
                <div style="height: 200px;"></div>
            </main>
        </PageTransition>
    </BlurBackground>
    <Nav top={!!scrollY} {path}/>
</ThemeProvider>

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

    html, body, body > *, body > * > * {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    a {
      text-decoration: none;
      color: black;
    }

    h2 {
      opacity: 0.7;
      font-weight: 300;
    }
  }

  main {
    height: 100%;
  }
</style>
