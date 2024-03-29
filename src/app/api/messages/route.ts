import { NextRequest } from 'next/server'

interface Message {
  role: string
  content: string
}

interface ReqBody {
  messages: Message[]
}

export async function POST(req: NextRequest) {
  const { messages }: ReqBody = await req.json()
  const apiKey = process.env.OPENAI_API_KEY
  const url = 'https://api.openai.com/v1/chat/completions'
  const body = JSON.stringify({
    messages,
    model: 'gpt-3.5-turbo',
    stream: false,
  })
  try {
    const response = await (
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body,
      })
    ).json()
    return Response.json({ success: true, response })
  } catch (error) {
    const response = { error }
    return Response.json({ success: false, response })
  }
}
