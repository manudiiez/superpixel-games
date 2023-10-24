import { ENV } from '@/utils/constants'
import VideoPlayer from '../videoPlayer/VideoPlayer'
import styles from './bannerVideo.module.scss'
import calcDiscountedPrice from '@/utils/func'
import { DateTime } from 'luxon'
import Discount from '../discount/Discount'
import Link from 'next/link'

const BannerVideo = async ({ title }) => {

    const getLastGame = async () => {
        try {
            const response = await fetch(`${ENV.CLIENT_API}/game/last`)
            const result = await response.json()
            return result[1]
        } catch (error) {
            console.log(error);
        }
    }

    const game = await getLastGame()
    const releaseDate = new Date(game.attributes.releaseDate).toISOString()
    const price = calcDiscountedPrice(game.attributes.price, game.attributes.discount)


    return (
        <section className={styles.bannerVideo}>
            <div className={styles.videoContainer}>
                <div>
                    <h4>{title}</h4>
                    <div>
                        <VideoPlayer video={game.attributes.video} height={450} className={styles.video} />
                    </div>
                    <div>
                        <VideoPlayer video={game.attributes.video} height={550} className={styles.video} />
                    </div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <div>
                        <h4>COMO COMPRAR</h4>
                        <ul>
                            <li>
                                <h5>1. Inicia sesion</h5>
                                <p>Registrate gratis y obten las mejores ofertas.</p>
                            </li>
                            <li>
                                <h5>2. Selecciona los productos</h5>
                                <p>Agrega al carrito los productos que desees.</p>
                            </li>
                            <li>
                                <h5>3. Compra de forma segura</h5>
                                <p>Paga atravez de mercado pago.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>{game.attributes.title}</h4>
                        <p className={styles.date}>
                            Lanzamiento: <span>{DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}</span>
                        </p>

                        <div className={styles.price}>
                            <Discount className={styles.discount}>-{game.attributes.discount}%</Discount>
                            <p className={styles.finalPrice}>{price}$</p>
                        </div>

                        <Link href='/'>Ver mas</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerVideo