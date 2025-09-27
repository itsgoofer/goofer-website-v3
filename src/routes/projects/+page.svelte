<script>
  import ProjectHero from '$lib/components/project-hero.svelte'
  import ProjectThumbnail from '$lib/components/project-thumbnail.svelte'
  import Pixel from '$lib/components/pixel.svelte'
  import Metas from '$lib/components/metas.svelte'

  export let data
  let dots = ''

  setInterval(() => {
    dots = dots.length < 3 ? dots + '.' : ''
  }, 200)
</script>

<Metas title="Goofer | Projects" />

<main>
  <Pixel title="Goofer Visit | Projects" />
  <ProjectHero />
  {#await data.projects}
    <div class="section">
      Loading projects{dots}
    </div>
  {:then projects}
    <div class="section mt-12">
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <ProjectThumbnail data="{projects}" />
      </div>
    </div>
  {/await}
</main>
