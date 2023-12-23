import styles from './cartList.module.scss'
import { map, size } from 'lodash'
import Game from './game/Game'
import NoResults from '@/components/shared/noResults/NoResults'

const CartList = ({ games, changeQuantityItem, deleteItem }) => {

    if (!games) return null
    const hasItems = size(games)

    if (hasItems < 1) return (
        <NoResults />
    )
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