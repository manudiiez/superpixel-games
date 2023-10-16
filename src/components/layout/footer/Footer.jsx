import Link from 'next/link'
import styles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div>
                    <h6>SOBRE NOSOTROS</h6>
                    <ul>
                        <li>
                            <Link href='/'>Nosotros</Link>
                        </li>
                        <li>
                            <Link href='/'>Soporte tecnico</Link>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h6>TIENDA</h6>
                        <ul>
                            <li>
                                <Link href='/'>
                                    PS4
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    PC
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Nintendo
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Xbox
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>CUENTA</h6>
                        <ul>
                            <li>
                                <Link href='/'>
                                    Iniciar sesion
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Registrarse
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Administrar cuenta
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Lista de deseados
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer