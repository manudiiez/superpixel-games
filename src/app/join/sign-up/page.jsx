import Link from 'next/link'
import styles from './sign-up.module.scss'
import RegisterForm from '@/components/join/registerForm/RegisterForm'

const Page = () => {
    return (
        <section className={styles.container}>
            <p>Empieza gratis</p>
            <h1>Crear una cuenta nueva<span>.</span></h1>
            <span>¿Ya eres miembro? <Link href='/join/sign-in'>Inicia sesión</Link></span>
            <div>

                <RegisterForm />
            </div>
        </section>
    )
}

export default Page