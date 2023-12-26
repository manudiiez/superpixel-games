"use client"
import CartList from "@/components/cart/cartList/CartList"
import { useCart } from "@/hooks/useCart"
import styles from './cart.module.scss'
import CartSummary from "@/components/cart/cartSummary/CartSummary"
import { useEffect, useState } from "react"
import { Cart } from "@/api/cart"


const Page = () => {
    const { cart, changeQuantityItem, deleteItem, deleteAll } = useCart()
    const [games, setGames] = useState(null);
    const cartCtrl = new Cart()

    useEffect(() => {
        (async () => {
            try {
                const data = []
                for await (const item of cart) {
                    const result = await cartCtrl.getCartGame(item.id)
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
                <CartSummary games={games} deleteAllItems={deleteAll} />
            </div>
        </div>
    )
}

export default Page