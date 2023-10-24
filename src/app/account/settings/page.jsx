"use client"
import FormSettings from '@/components/account/settings/form/FormSettings'
import styles from './settings.module.scss'
import { useSession } from 'next-auth/react';

const page = () => {

    const { data: session } = useSession()

    if (!session) return null
    return (
        <section className={styles.settings}>
            <h5>Editar cuenta</h5>
            <FormSettings user={session.user.user} token={session.user.jwt} userId={session.user.user.id} />
        </section>
    )
}

export default page