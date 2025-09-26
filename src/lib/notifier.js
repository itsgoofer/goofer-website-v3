let notifierHook =
  'https://discord.com/api/webhooks/1126193356351996135/EXbi4Wu04WBIw_sBYFcgfN8TKw9HdFAeg6JXWotBJ7Pf2Wu00UoTNWgJQU6WeEvPYV8Z'

const sendDiscordContactFormTrigger = () => {
  const apiEndpoint = `https://goofercloud.vercel.app/pixel?hook=${notifierHook}&title=`
  fetch(apiEndpoint + 'Goofer Website - Contact Form Submission')
}

export { sendDiscordContactFormTrigger }
