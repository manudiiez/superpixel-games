"use client"
import { useSession } from 'next-auth/react'
import styles from './info.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { DateTime } from 'luxon'

const Info = () => {

    const { data: session } = useSession()
    return (
        <section className={styles.info}>
            <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.infoData}>
                <h3>{session?.user.user.username}</h3>
                <h4>{session?.user.user.email}</h4>
                <p>
                    Miembro desde: {DateTime.fromISO(session?.user.user.createdAt, { locale: "es" }).toFormat("DDD")}
                </p>
            </div>
        </section>
    )
}

export default Info