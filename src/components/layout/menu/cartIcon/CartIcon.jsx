import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './cartIcon.module.scss'
import { useCart } from '@/hooks/useCart'
import { useSession } from 'next-auth/react'



const CartIcon = () => {
    const { data: session, status } = useSession()
    const { total } = useCart()
    return (
        <div className={styles.cart}>
            <FontAwesomeIcon icon={faBagShopping} />
            <span>{status === "authenticated" ? total : 0}</span>
        </div>
    )
}

export default CartIcon