<script>
  import { page } from '$app/stores'
</script>

<nav class="flex gap-4 items-center max-md:py-4 select-none">
  <a href="/" class:active="{$page.url.pathname === '/'}">Home</a>
  <a href="/projects" class:active="{$page.url.pathname.startsWith('/projects')}">Projects</a>
  <a href="/inquiry" class:active="{$page.url.pathname === '/inquiry'}">Inquiry</a>
</nav>
