<script lang="ts">
    export let path = [], top;
</script>

<style lang="scss">
  $height: 60px;

  nav {
    position: fixed;
    height: $height;
    border-radius: 12px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    bottom: 8px;
    left: 8px;
    right: 8px;
    padding: 16px;

    &.top {
      background: #eeeeee99;
      backdrop-filter: blur(10px);
    }
  }

  .logo {
    height: 100%;
    border-radius: 50%;
  }
</style>

<nav class:top>
    <div style="height: 100%;">
        <a href="/"><img class="logo" src="/logo.jpeg"/></a>
        {#each path as {link, text}}
            <a style="margin: 0 10px;font-size: 22px;font-weight: 900;" href={link}>/{text}</a>
        {/each}
    </div>
    <div>
        Copyright 2022 <a href="//seorii.page/" target="_blank" style="text-decoration: underline">@seo-rii</a>.
        All rights reserved.
    </div>
</nav>
