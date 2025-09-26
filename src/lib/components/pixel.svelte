<script>
  import { dev } from '$app/environment'

  export let title
</script>

{#if !dev}
  <img
    alt=""
    src="https://goofercloud.vercel.app/pixel?hook=https://discord.com/api/webhooks/1126193356351996135/EXbi4Wu04WBIw_sBYFcgfN8TKw9HdFAeg6JXWotBJ7Pf2Wu00UoTNWgJQU6WeEvPYV8Z&title={title}"
    width="1"
    height="1"
    style="display: none;"
  />
{/if}
