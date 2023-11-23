import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit"
import counterReducer from "../modules/counter/counterSlice"
import chatReducer from "../modules/chat/chatSlice"
import chatSaga from "../modules/chat/chatSaga"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(chatSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
