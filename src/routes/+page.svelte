<script>
  import HomeHero from '../lib/components/home-hero.svelte'
  import AboutSection from '$lib/components/sections/about-section.svelte'
  import ServicesSection from '$lib/components/sections/services-section.svelte'
  import Pixel from '$lib/components/pixel.svelte'
  import Metas from '$lib/components/metas.svelte'
</script>

<Metas title="Goofer" />

<main>
  <Pixel title="Goofer Website Visit | Home" />
  <HomeHero />
  <AboutSection />
  <!-- <ServicesSection /> -->
</main>
