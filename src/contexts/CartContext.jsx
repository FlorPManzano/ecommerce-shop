import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    // check if item is already in cart
    const itemInCart = cart.find((item) => item.id === id)
    if (itemInCart) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
