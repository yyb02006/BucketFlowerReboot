'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { createStore, AppStore } from '#src/lib/store'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = createStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
