import Link from 'next/link'
import styles from './sign-in.module.scss'
import LoginForm from '@/components/join/loginForm/LoginForm'

const page = () => {
    return (
        <section className={styles.container}>
            <p>Empieza gratis</p>
            <h1>Incia sesión en tu cuenta<span>.</span></h1>
            <span>¿No eres miembro? <Link href='/join/sign-up'>Crear usuario</Link></span>
            <div>
                <LoginForm />
            </div>
        </section>
    )
}

export default page