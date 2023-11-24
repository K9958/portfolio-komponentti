import { createSlice } from '@reduxjs/toolkit'

const storeSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = storeSlice.actions

export default storeSlice.reducer