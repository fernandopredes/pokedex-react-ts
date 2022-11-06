import { createSlice } from "@reduxjs/toolkit";

let estadoInicial: number[]  = []

const favoriteStorage = localStorage.getItem('@pokedex/favorite')
if (favoriteStorage) {
  estadoInicial = JSON.parse(favoriteStorage)
}

export const favorite = createSlice({
  name: "favorite",
  initialState: estadoInicial,
  reducers:{
    add: (state, action) => {
      state.push(action.payload)
      state.sort((a,b)=>(a - b))
      localStorage.setItem('@pokedex/favorite', JSON.stringify(state))
    },
    remove: (state, action) => {
      const index = state.findIndex((item :number) => Number(item) === Number(action.payload))

      state.splice(index, 1)
      localStorage.setItem('@pokedex/favorite', JSON.stringify(state))
    }
  }
})

export const { add, remove } = favorite.actions

export default favorite.reducer
