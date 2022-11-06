import { createSlice } from "@reduxjs/toolkit";

const estadoInicial: number[]  = []

export const favorite = createSlice({
  name: "favorite",
  initialState: estadoInicial,
  reducers:{
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      const index = state.findIndex((item :number) => Number(item) === Number(action.payload))
      
      state.splice(index, 1)
    }
  }
})
