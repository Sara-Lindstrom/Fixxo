import { createContext , useContext , useState } from "react";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartContext = createContext()

export const useShoppingcart = () => {
    return useContext (ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {

    const [cartItem, setCartItem] = useState ([])

    const CartQuantity = cartItem.reduce(
        (quantity, item) => quantity + item.quantity, 0 
    )

    const getItemQuantity = (articleNumber) => {
        return cartItem.find(item => item.articleNumber === articleNumber)?.quantity || 0 
    }

    const incrementQuantity = (cartItem) => {
        const {articleNumber, product} = cartItem

        setCartItem ( items => {
            if (items.find (item => item.articleNumber === articleNumber) == null){
                return [...items, {articleNumber, product, quantity:1}]
            }
            else {
                return items.map (item => {
                    if (item.articleNumber === articleNumber) {
                       return {...items, quantity: item.quantity +1} 
                    }
                    else {
                        return item
                    }
                    
                })
            }
        })
    }

    const decrementQuantity = (cartItem) => {
        const {articleNumber} = cartItem

        setCartItem ( items => {
            if (items.find (item => item.articleNumber === articleNumber).quantity === 1){
                return items.filter (item => item.articleNumber !== articleNumber)
            }
            else {
                return items.map (item => {
                    if (item.articleNumber === articleNumber) {
                       return {...items, quantity: item.quantity -1} 
                    }
                    else {
                        return item
                    }
                    
                })
            }
        })
    }

    const removeItem = (articleNumber) => {
        setCartItem ( items => {
            return items.filter (item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItem, CartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart/>
    </ShoppingCartContext.Provider>
}