"use client"
import { ENV } from "@/utils/constants";
import { forEach } from "lodash";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()

class Cart {
    getAll() {
        const response = localStorage.getItem(ENV.CART)
        if (!response) return []
        return JSON.parse(response)
    }

    add(gameId) {
        const games = this.getAll()
        const objIndex = games.findIndex((game) => game.id === gameId)
        if (objIndex < 0) {
            games.push({
                id: gameId,
                quantity: 1
            })
        } else {
            games[objIndex].quantity += 1
        }
        localStorage.setItem(ENV.CART, JSON.stringify(games))
    }

    count() {
        const response = this.getAll()
        let count = 0
        forEach(response, (item) => {
            count += item.quantity
        })

        return count
    }

    changeQuantity(gameId, quantity) {
        const games = this.getAll()
        const objIndex = games.findIndex((game) => game.id === gameId)

        games[objIndex].quantity = quantity

        localStorage.setItem(ENV.CART, JSON.stringify(games))
    }

    delete(gameId) {
        const games = this.getAll()
        const updatedGames = games.filter((game) => game.id !== gameId)
        localStorage.setItem(ENV.CART, JSON.stringify(updatedGames))
    }

    deleteAll() {
        localStorage.removeItem(ENV.CART)
    }
}

const cartCtrl = new Cart()

export function CartProvider({ children }) {

    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(cartCtrl.count());


    const addCart = (gameId) => {
        cartCtrl.add(gameId)
        refreshTotalCart()
    }

    useEffect(() => {
        setCart(cartCtrl.getAll());
    }, [])

    const changeQuantityItem = (gameId, quantity) => {
        cartCtrl.changeQuantity(gameId, quantity)
        refreshTotalCart()
    }

    const deleteItem = (gameId) => {
        cartCtrl.delete(gameId)
        refreshTotalCart()
    }

    const refreshTotalCart = () => {
        setTotal(cartCtrl.count())
        setCart(cartCtrl.getAll())
    }

    const deleteAllItems = () => {
        cartCtrl.deleteAll()
        setCart(null)
        refreshTotalCart()
    }

    const data = {
        cart: cart,
        addCart: addCart,
        total: total,
        deleteItem: deleteItem,
        deleteAll: deleteAllItems,
        changeQuantityItem: changeQuantityItem,
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
}