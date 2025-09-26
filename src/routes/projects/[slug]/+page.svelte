<script>
  import ProjectDetail from '$lib/components/sections/project-detail-section.svelte'
  import Metas from '$lib/components/metas.svelte'
  export let data
</script>

<Metas
  title="{`Goofer | ${data.project.title}`}"
  image="{`/project-images/${data.project.slug}/${data.project.items[0]}`}"
  description="{data.project.description}"
/>
<ProjectDetail project="{data.project}" />
