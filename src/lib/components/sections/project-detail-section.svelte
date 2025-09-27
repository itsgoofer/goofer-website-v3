<script>
  import Scramble from '$lib/components/scramble.svelte'
  import { fade } from 'svelte/transition'

  export let project

  function preload(src) {
    return new Promise(function (resolve) {
      let img = new Image()
      img.onload = resolve
      img.src = src
    })
  }

  const getBasePath = (item) => {
    return project.isExternal ? item : `/project-images/${project.slug}/${item}`
  }
</script>

<div class="section flex flex-col">
  <h2 class="text-[#4C82E8] mb-2 border-b border-[#4C82E8]/30 md:border-none pb-3 md:pb-0">
    / <a href="/projects">projects /</a>
    <Scramble speed="50">{project.title}</Scramble>
  </h2>
  <div class="mb-8 text-neutral-400 md:flex gap-2">
    <div class="md:hidden mb-2 text-[#4C82E8] font-bold">Tools used:</div>
    {#each project.used_tools.split(', ') as tool}
      <div class="bg-orange-300/10 rounded px-[0.3em] md:mb-0 mb-2 text-[#4C82E8]">{tool}</div>
    {/each}
  </div>
  <div class="mb-2 max-w-[760px]">
    {project.description}
  </div>
  {#each project.items as item, i}
    <div class="py-2">
      {#if item.split('.')[1] !== 'mp4'}
        {#await preload(getBasePath(item)) then _}
          <img src="{getBasePath(item)}" alt="project" in:fade="{{ duration: 250 }}" />
        {/await}
      {:else}
        <video src="{getBasePath(item)}" playsinline autoplay loop muted draggable="false"></video>
      {/if}
    </div>
  {/each}
</div>
