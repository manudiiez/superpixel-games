import styles from './header.module.scss'
import WishListIcon from '@/components/shared/wishListIcon/WishListIcon'

const Header = ({ title, gameId }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <WishListIcon gameId={gameId} className={styles.heart} />
        </div>
    )
}

export default Header