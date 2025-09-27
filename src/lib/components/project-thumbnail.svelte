<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  export let data

  let visibleItems = []

  onMount(() => {
    data.forEach((item, i) => {
      setTimeout(() => {
        visibleItems = [...visibleItems, item]
      }, 50 * i)
    })
  })
</script>

{#each visibleItems as item, i}
  <a
    href="{`/projects/${item.slug}`}"
    transition:fade="{{ delay: 100 }}"
    class="overflow-hidden flex flex-col gap-2 group">
    <img
      src="{item.isExternal ? `${item.preview}` : `/project-images/${item.slug}/${item.preview}`}"
      alt="" />

    <div class="group-hover:text-[#4C82E8] transition-colors font-semibold">{item.title}</div>
    <div class="text-sm text-neutral-500 relative bottom-2 truncate">
      {item.used_tools}
    </div>
  </a>
{/each}
