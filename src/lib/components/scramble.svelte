<script>
  import { onMount } from 'svelte'
  import baffle from 'baffle'

  export let speed = 30

  onMount(() => {
    baffle('.baffle-text', {
      characters: '>-▓█▒░_<%^&*',
      // characters: '*•+',
      speed: speed
    })
      .start()
      .reveal(500, 800)
  })
</script>

<span class="baffle-text font-mono">
  <slot />
</span>
