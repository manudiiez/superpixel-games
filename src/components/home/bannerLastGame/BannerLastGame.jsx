import Image from 'next/image'
import styles from './bannerLastGame.module.scss'
import { ENV } from '@/utils/constants'
import calcDiscountedPrice from '@/utils/func'
import Discount from '@/components/shared/discount/Discount'
import Link from 'next/link'

const BannerLastGame = async () => {

    const getLastGame = async () => {
        try {
            const response = await fetch(`${ENV.CLIENT_API}/game/last`)
            const result = await response.json()
            return result[0]
        } catch (error) {
            console.log(error);
        }
    }

    const game = await getLastGame()
    const wallpaper = game.attributes.wallpaper
    const wallpaperPhone = game.attributes.wallpaperPhone
    const price = calcDiscountedPrice(game.attributes.price, game.attributes.discount)


    return (
        <section className={styles.bannerLastGame}>
            <img src={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`} className={styles.wallpaper} alt="" />
            <img src={`${ENV.SERVER_HOST}${wallpaperPhone.data.attributes.url}`} className={styles.wallpaperPhone} alt="" />
            <div className={styles.container}>
                <div>
                    <h1>{game.attributes.title}</h1>
                    <div className={styles.price}>
                        <Discount className={styles.discount}>-{game.attributes.discount}%</Discount>
                        <p className={styles.finalPrice}>{price}$</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link href='/a'>Comprar</Link>
                        <Link href='/a'>Mas juegos</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BannerLastGame