<script lang="ts">
    import logo from '$static/logo.jpeg'

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
    left: 0;
    bottom: 0;
    right: 0;
    padding: 16px;

    &.top {
      background: #eeeeee99;
      backdrop-filter: blur(10px);
      bottom: 8px;
      left: 8px;
      right: 8px;
    }
  }

  .logo {
    height: 100%;
    border-radius: 50%;
  }
</style>

<nav class:top>
    <div style="height: 100%;">
        <img class="logo" src={logo}/>
        {#each path as el}
            <span style="margin: 0 10px;font-size: 22px;font-weight: 900;">/{el}</span>
        {/each}
    </div>
    <div>
        Copyright 2022 <a href="//seo-rii.github.io/" target="_blank" style="text-decoration: underline">Seo-Rii</a>. All rights reserved.
    </div>
</nav>
