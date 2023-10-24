"use client"
import Link from 'next/link'
import styles from './menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import classNames from 'classnames'
import CartIcon from './cartIcon/CartIcon'
import { useRouter, useSearchParams } from 'next/navigation'

const Menu = () => {

    const router = useRouter()

    const serachParams = useSearchParams()
    const params = new URLSearchParams(serachParams)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState(params.get('s') || '');

    const platforms = params.get('platforms') || ''


    const openCloseMenu = () => setIsMenuOpen(!isMenuOpen)
    const openCloseSearch = () => setShowSearch(!showSearch)

    const onSearch = (e) => {
        setSearch(e.target.value)
        router.push(`/search?s=${e.target.value}&platforms=${platforms}`)
    }

    return (
        <header className={styles.menu}>
            <nav>
                <div className={styles.left}>
                    <button onClick={openCloseMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Link href='/'>
                        SP-GAMES
                    </Link>
                </div>
                <div className={classNames(styles.center, {
                    [styles.active]: isMenuOpen,
                    [styles.activeSearch]: showSearch
                })}>
                    <ul>
                        <li>
                            <Link href='/account/wishlist' onClick={openCloseMenu}>
                                <FontAwesomeIcon icon={faUser} />
                                Mi cuenta
                            </Link>
                        </li>
                        <li>
                            <Link href='/search?s=&platforms=playstation' onClick={openCloseMenu}>
                                <img src="./icon-play.svg" alt="" />
                                PS4
                            </Link>
                        </li>
                        <li>
                            <Link href='/search?s=&platforms=pc' onClick={openCloseMenu}>
                                <img src="./icon-pc.svg" alt="" />
                                PC
                            </Link>
                        </li>
                        <li>
                            <Link href='/search?s=&platforms=nintendo' onClick={openCloseMenu}>
                                <img src="./icon-swt.svg" alt="" />
                                Nintendo
                            </Link>
                        </li>
                        <li>
                            <Link href='/search?s=&platforms=xbox' onClick={openCloseMenu}>
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
                        <input type="text" placeholder='Buscador' onChange={(e) => onSearch(e)} value={search} />
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
                        <Link href='/cart'>
                            <CartIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href='/account/wishlist'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu