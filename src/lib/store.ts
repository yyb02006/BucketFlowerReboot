import { configureStore } from '@reduxjs/toolkit'

export const createStore = () => {
  return configureStore({ reducer: {} })
}

// Store객체를 직접 생성하지 않을 때는 아래처럼 AppStore를 정의하여 getState, dispatch 타입 사용가능
export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
