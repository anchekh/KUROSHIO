import { createStore } from "vuex"

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || []
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(function(item) {
        return item.id === product.id
      })
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          description: product.description,
          quantity: 1
        })
      }
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(function(item) {
        return item.id !== productId
      })
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    updateQuantity(state, payload) {
      const product = state.cart.find(function(item) {
        return item.id === payload.productId
      })
      if (product) {
        product.quantity = Math.max(1, payload.newQuantity)
      }
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    clearCart(state) {
      state.cart = []
      localStorage.removeItem("cart")
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product)
    },
    removeFromCart(context, productId) {
      context.commit("removeFromCart", productId)
    },
    updateQuantity(context, payload) {
      context.commit("updateQuantity", payload)
    },
    clearCart(context) {
      context.commit("clearCart")
    }
  },
  getters: {
    cartItems: function(state) {
      return state.cart
    },
    cartTotal: function(state) {
      return state.cart.reduce(function(total, item) {
        return total + (item.price * item.quantity)
      }, 0)
    }
  }
})