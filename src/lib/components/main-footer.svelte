<script>
  import Subscribe from './subscribe-form.svelte'
  import Scramble from './scramble.svelte'
  import SocialLinks from '$lib/components/social-links.svelte'
</script>

<footer class="section my-20 select-none flex flex-col gap-5">
  <div
    class="border-t border-neutral-700 flex md:flex-row flex-col md:items-center gap-6 md:justify-between pt-2"
  >
    <Subscribe />
    <div class="text-sm text-neutral-500 md:text-right">
      <SocialLinks />
    </div>
  </div>
  <div class="border-t border-neutral-700 pt-5 text-sm text-center text-neutral-500">
    <div>
      &copy;{new Date().getFullYear()} Goofer. All rights reserved.
    </div>

    <div>
      <a
        href="https://itsgoofer.com"
        target="_blank"
        class="hover:text-neutral-200 transition-colors"
      >
        Made by
        <Scramble>Goofer</Scramble>
      </a>
    </div>
  </div>
</footer>
