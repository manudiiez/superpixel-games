import React, { useState } from 'react'
import styles from './game.module.scss'
import calcDiscountedPrice from '@/utils/func';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Game = ({ game, changeQuantityItem, deleteItem }) => {

    const [cant, setCant] = useState(game.quantity);
    const addItem = () => {
        setCant(cant + 1)
        changeQuantityItem(game.id, cant + 1)
    }
    const restItem = () => {
        setCant(cant - 1)
        if (cant <= 1) {
            deleteItem(game.id)
        } else {
            changeQuantityItem(game.id, cant - 1)
        }
    }
    const cover = game.attributes.cover.data.attributes.url

    return (
        <div className={styles.game}>
            <div className={styles.left}>
                <button onClick={addItem}>+</button>
                <p>{cant}</p>
                <button onClick={restItem}>-</button>
            </div>
            <div className={styles.center}>
                <img src={process.env.NEXT_PUBLIC_SERVER_HOST + cover} alt="" />
                <div>
                    <h6>{game.attributes.title}</h6>
                    <p>{calcDiscountedPrice(game.attributes.price, game.attributes.discount)}$</p>
                </div>
            </div>
            <button onClick={() => deleteItem(game.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default Game