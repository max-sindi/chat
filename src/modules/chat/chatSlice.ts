import {createSlice} from "@reduxjs/toolkit"

interface Message {}

export interface ChatState {
  messages: Message[]
  status: "offline" | "online"
  loading: boolean
}

const initialState: ChatState = {
  loading: true,
  messages: [],
  status: "offline",
}

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {

  }
})

export default slice.reducer