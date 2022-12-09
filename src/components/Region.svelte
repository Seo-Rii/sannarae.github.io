<script lang="ts">
    import {Ripple} from "nunui";

    export let blur = true;
</script>

<style lang="scss">
  main {
    padding: 10px;
    background: #99999922;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    margin: 3px;

    &.blur {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > :global(p) {
        margin: 10px 0;
        font-weight: 700;
      }

      & > :global(*) {
        margin: 5px;
      }
    }

    &:hover {
      background: #99999944;
      padding: 12px;
      margin: -2px;
    }

    &:active {
      background: #99999944;
      padding: 16px;
      margin: -6px;
    }
  }
</style>

<main class:blur>
    <div>
        <slot/>
    </div>
    <Ripple primary={false}/>
</main>
