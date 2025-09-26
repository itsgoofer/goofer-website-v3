<script>
  import { onMount } from 'svelte'
  import { fade, slide } from 'svelte/transition'

  let email = ''
  let isSubscribed = false
  let isAlreadySubscribed = false
  let isLoading = true

  function init() {
    if (localStorage.getItem('subscribed')) {
      isAlreadySubscribed = true
    }
    isLoading = false
  }

  async function subscribe(e) {
    e.preventDefault()
    if (!document.forms['subscribe-form'].checkValidity()) {
      return
    }
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const result = await response.json()

      if (result.success) {
        isSubscribed = true
        localStorage.setItem('subscribed', true)
      } else {
        console.log(result)
      }
    } catch (error) {
      console.log('wtf', error)
    }
  }

  onMount(() => {
    init()
  })
</script>

<div transition:fade="{{ duration: 300 }}">
  {#if isSubscribed}
    <div class="text-sm text-[#4C82E8]">Thank you for subscribing!</div>
  {:else if isAlreadySubscribed}
    <div class="text-sm text-[#4C82E8]">You are already subscribed!</div>
  {:else}
    <div class="py-2 text-[#4C82E8]">Subscribe to our newsletter</div>
    <form
      name="subscribe-form"
      on:submit="{subscribe}"
      transition:slide="{{ duration: 100 }}"
      class="flex justify-between gap-2"
    >
      <input
        bind:value="{email}"
        required
        type="email"
        placeholder="Email"
        class="w-full bg-transparent border border-neutral-600 rounded py-1 px-2 focus:border-[#4C82E8] hover:border-neutral-500 transition-colors"
      />

      <button
        class="border py-1 px-2 border-neutral-600 rounded hover:text-[#4C82E8] hover:border-[#4C82E8] transition-colors"
      >
        Subscribe
      </button>
    </form>
  {/if}
</div>
