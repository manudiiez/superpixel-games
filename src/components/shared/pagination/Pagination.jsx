"use client"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './pagination.module.scss'

const Pagination = ({ totalPages, currentPage }) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQuery = (name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()
    }

    const onPageChange = (page) => {
        router.push(pathname + '?' + createQuery('page', page))
    }
    return (
        <div className={styles.pagination}>
            <div>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage - 1 < 1}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button>{currentPage}</button>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage + 1 > totalPages}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    )
}

export default Pagination