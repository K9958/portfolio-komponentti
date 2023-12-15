import { createSlice } from '@reduxjs/toolkit'

const storeSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      // add item id as a key and item quantity as a value to the state
      state[action.payload.id] = (state[action.payload.id] || 0) + 1
      console.log("adding to cart")
      console.log(action.payload)
    },
    removeFromCartSingle: (state, action) => {
      // remove one item from the dictionary
      console.log("removing single unit from cart")
      if (state[action.payload] > 0) {
        state[action.payload] -= 1
        console.log(action.payload)
      } else 
        delete state[action.payload]
    },
    removeFromCart: (state, action) => {
      // remove one item from the dictionary
      console.log("removing product from cart")
      delete state[action.payload]
    },
    clearCart: () => {
      console.log("clearing cart")
      return {}
    },
    getCartCount: (state) => {
      console.log("getting cart count")
      let count = 0
      for (const [, value] of Object.entries(state)) {
        count += value
      }
      return count
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, removeFromCartSingle, clearCart } = storeSlice.actions

export default storeSlice.reducer