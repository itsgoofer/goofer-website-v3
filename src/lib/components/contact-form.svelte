<script>
  import { sendDiscordContactFormTrigger } from '$lib/notifier.js'
  import { slide } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  import { dev } from '$app/environment'

  let name = ''
  let subject = ''
  let email = ''
  let message = ''
  let formSubmitted = false
  let formIsSending = false

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!document.forms['contact-form'].checkValidity()) {
      return
    }

    formIsSending = true

    const request = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, subject, email, message })
    })

    if (request.ok) {
      if (!dev) sendDiscordContactFormTrigger()
      await new Promise((resolve) => setTimeout(resolve, 1500))
      resetForm()
      formSubmitted = true
      formIsSending = false
    } else {
      console.error('Failed to send contact form', request)
      formIsSending = false
      alert('Failed to send contact form. Please try again later.')
    }
  }

  const resetForm = () => {
    name = ''
    subject = ''
    email = ''
    message = ''
  }
</script>

{#if !formSubmitted}
  <div class="section" transition:slide="{{ duration: 600, easing: expoOut }}">
    <div class="max-w-[760px]">
      <form class="flex flex-col w-full gap-2" name="contact-form" on:submit="{onSubmit}">
        <div class="flex md:flex-row flex-col gap-2">
          <input
            type="text"
            required
            bind:value="{name}"
            aria-autocomplete="none"
            placeholder="Your Name"
            class="w-full bg-transparent border border-neutral-600 rounded py-1 px-2 focus:border-[#4C82E8] hover:border-neutral-500 transition-colors"
          />

          <input
            type="email"
            bind:value="{email}"
            required
            placeholder="Your Email"
            class="w-full bg-transparent border border-neutral-600 rounded py-1 px-2 focus:border-[#4C82E8] hover:border-neutral-500 transition-colors"
          />
        </div>
        <div class="flex flex-col gap-2">
          <input
            type="text"
            bind:value="{subject}"
            placeholder="Subject"
            class="w-full bg-transparent border border-neutral-600 rounded py-1 px-2 focus:border-[#4C82E8] hover:border-neutral-500 transition-colors"
          />
          <textarea
            bind:value="{message}"
            required
            rows="5"
            placeholder="Message"
            class="w-full bg-transparent border border-neutral-600 rounded py-1 px-2 focus:border-[#4C82E8] hover:border-neutral-500 transition-colors resize-none"
          ></textarea>
        </div>

        <div class="flex">
          <button
            type="submit"
            disabled="{formIsSending}"
            class="border py-1 px-2 border-neutral-600 rounded hover:text-[#4C82E8] hover:border-[#4C82E8] transition-colors disabled:cursor-not-allowed disabled:text-neutral-500 disabled:hover:border-neutral-600"
          >
            {#if formIsSending}
              Sending Message...
            {:else}
              Send Message
            {/if}
          </button>
        </div>
      </form>
    </div>
  </div>
{:else}
  <div class="section" transition:slide="{{ duration: 600, easing: expoOut }}">
    <div class="w-[760px]">
      <h3 class="text-[#4C82E8]">Thank you for your message!</h3>
      <p>I will get back to you as soon as possible.</p>
    </div>
  </div>
{/if}
