import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './cartIcon.module.scss'
import { useCart } from '@/hooks/useCart'



const CartIcon = () => {
    const { total } = useCart()
    return (
        <div className={styles.cart}>
            <FontAwesomeIcon icon={faBagShopping} />
            <span>{total}</span>
        </div>
    )
}

export default CartIcon