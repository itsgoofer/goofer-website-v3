<script>
  import '../app.css'
  import MainHeader from '../lib/components/main-header.svelte'
  import MainFooter from '../lib/components/main-footer.svelte'
  import { navigating } from '$app/stores'
  import { fade } from 'svelte/transition'

  let dots = ''

  setInterval(() => {
    dots = dots.length < 3 ? dots + '.' : ''
  }, 200)
</script>

<main>
  {#if $navigating}
    <div
      class="fixed z-50 w-screen h-screen bg-black/80 overflow-hidden"
      transition:fade="{{ duration: 100 }}"
    >
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[150px] text-orange-200 font-semibold"
      >
        Loading project{dots}
      </div>
    </div>
  {/if}
  <MainHeader />
  <slot></slot>
  <MainFooter />
</main>
