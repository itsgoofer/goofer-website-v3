export async function POST({ request }) {
  const data = await request.json()
  const { name, email, subject, message } = data
  const hook =
    'https://discord.com/api/webhooks/1288680359147475016/ElQEDGF7-KQCwW3wnWbcaTbyinyxUX1vc__3YMAdz8Hly7MKlLkWNVr1pOu7kidz6wN4'

  const response = await fetch(hook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content:
        '## New Contact Form Submission: \n' +
        `**Name:** ${name}\n**E-Mail:** ${email}\n**Subject:** ${subject}\n**Message:** ${message}`
    })
  })

  if (response.ok) {
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } else {
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}
