"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './filters.module.scss'
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Filters = ({ searchText }) => {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);
    const openClose = () => setIsOpen(!isOpen)

    const selectFilter = (name, value) => {
        openClose()
        router.push(`/search?s=${searchText}&${name}=${value}`)
    }

    return (
        <div className={styles.filters}>
            <button onClick={openClose}>
                Filtros
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <div className={classNames(styles.content, {
                [styles.isActive]: isOpen
            })}>
                <button onClick={openClose}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div>
                    <p>PLATAFORMAS</p>
                    <ul>
                        <li>
                            <input type="radio" name='platforms' value='' onChange={(e) => selectFilter(e.target.name, e.target.value)} />
                            Todos
                        </li>
                        <li>
                            <input type="radio" name='platforms' value='playstation' onChange={(e) => selectFilter(e.target.name, e.target.value)} />
                            PS4
                        </li>
                        <li>
                            <input type="radio" name='platforms' value='pc' onChange={(e) => selectFilter(e.target.name, e.target.value)} />
                            PC
                        </li>
                        <li>
                            <input type="radio" name='platforms' value='nintendo' onChange={(e) => selectFilter(e.target.name, e.target.value)} />
                            Nintendo
                        </li>
                        <li>
                            <input type="radio" name='platforms' value='xbox' onChange={(e) => selectFilter(e.target.name, e.target.value)} />
                            Xbox
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filters