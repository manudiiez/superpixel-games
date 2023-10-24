"use client"
import CartList from "@/components/cart/cartList/CartList"
import { useCart } from "@/hooks/useCart"
import styles from './cart.module.scss'
import CartSummary from "@/components/cart/cartSummary/CartSummary"
import { useEffect, useState } from "react"


const page = () => {

    const { cart, changeQuantityItem, deleteItem } = useCart()
    const [games, setGames] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = []
                for await (const item of cart) {
                    const response = await fetch(`http://localhost:3000/api/game/cart/${item.id}`)
                    const result = await response.json()
                    data.push({ ...result.data, quantity: item.quantity })
                }
                setGames(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [cart])

    if (!cart) return null
    return (
        <div className={styles.cartContainer}>
            <div>
                <h5>Tu carrito de juegos</h5>
                <CartList games={games} changeQuantityItem={changeQuantityItem} deleteItem={deleteItem} />
            </div>
            <div>
                <h5>Resumen</h5>
                <CartSummary games={games} />
            </div>
        </div>
    )
}

export default page