'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [reply, setReply] = useState<string>('')
  const abortStrictRef = useRef(true)
  const testCall = async () => {
    const test = await (
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: "Hello GPT! what's your version of GPT?" }],
        }),
      })
    ).json()
    setReply(test.response.choices[0].message.content)
  }
  useEffect(() => {
    if (abortStrictRef.current) {
      testCall()
      abortStrictRef.current = false
    }
  }, [])
  return (
    <section className="text-amber-700">
      Hello NextJS!!
      <div>{reply}</div>
    </section>
  )
}
