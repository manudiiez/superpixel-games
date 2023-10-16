"use client"
import Link from 'next/link'
import styles from './menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import classNames from 'classnames'

const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);


    const openCloseMenu = () => setIsMenuOpen(!isMenuOpen)
    const openCloseSearch = () => setShowSearch(!showSearch)

    return (
        <header className={styles.menu}>
            <nav>
                <div className={styles.left}>
                    <button onClick={openCloseMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <p>SP-GAMES</p>
                </div>
                <div className={classNames(styles.center, {
                    [styles.active]: isMenuOpen,
                    [styles.activeSearch]: showSearch
                })}>
                    <ul>
                        <li>
                            <Link href='/'>
                                <FontAwesomeIcon icon={faUser} />
                                Cuenta
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <img src="./icon-play.svg" alt="" />
                                PS4
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <img src="./icon-pc.svg" alt="" />
                                PC
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <img src="./icon-swt.svg" alt="" />
                                Nintendo
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <img src="./icon-xbx.svg" alt="" />
                                Xbox
                            </Link>
                        </li>
                        <li>
                            <button onClick={openCloseSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </li>
                        <button className={styles.closeMenu} onClick={openCloseMenu}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </ul>
                    <div className={styles.bgMenu} onClick={openCloseMenu}></div>
                    <div className={classNames(styles.search, {
                        [styles.active]: showSearch
                    })}>
                        <input type="text" placeholder='Buscador' />
                        <FontAwesomeIcon icon={faX} onClick={openCloseSearch} />
                    </div>
                </div>
                <ul className={styles.right}>
                    <li>
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={openCloseSearch} />
                        </button>
                    </li>
                    <li>
                        <Link href='/'>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </Link>
                    </li>
                    <li>
                        <Link href='/account'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu