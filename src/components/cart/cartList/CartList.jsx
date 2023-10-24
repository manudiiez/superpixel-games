import { useEffect, useState } from 'react'
import styles from './cartList.module.scss'
import { map } from 'lodash'
import Game from './game/Game'
import { useCart } from '@/hooks/useCart'

const CartList = ({ games, changeQuantityItem, deleteItem }) => {

    if (!games) return null
    return (
        <div className={styles.cartList}>
            {
                map(games, (game) => (
                    <Game key={game.id} game={game} changeQuantityItem={changeQuantityItem} deleteItem={deleteItem} />
                ))
            }
        </div>
    )
}

export default CartList