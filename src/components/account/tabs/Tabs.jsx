"use client"
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react"
import styles from './tabs.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import Swal from 'sweetalert2';

const Tabs = () => {

    const pathName = usePathname();

    const logout = async () => {
        const response = await Swal.fire({
            icon: 'question',
            title: '¿Cerrar sesión?',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Cerrar sesión',
        })
        if (response.isConfirmed) {
            Swal.fire('Sesión cerrada!', '', 'success')
            signOut({ callbackUrl: '/join/sign-in' })
        }
    }
    return (
        <div className={styles.tabs}>
            <div>
                <Link href='/account/wishlist' className={classNames({ [styles.isActive]: pathName === '/account/wishlist' })}>Mi lista</Link>
                <Link href='/account/orders' className={classNames({ [styles.isActive]: pathName === '/account/orders' })}>Mis pedidos</Link>
            </div>
            <div>
                <Link href='/account/settings' className={classNames({ [styles.isActive]: pathName === '/account/settings' })}>
                    <span>Ajustes</span>
                    <FontAwesomeIcon icon={faGear} />

                </Link>
                <button onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
            </div>
        </div>
    )
}

export default Tabs