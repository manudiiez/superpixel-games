import styles from './bannerLastGame.module.scss'
import { Game } from '@/api/game';
import calcDiscountedPrice from '@/utils/func';
import Discount from '@/components/shared/discount/Discount';
import Link from 'next/link';

const BannerLastGame = async () => {
    const gameCtrl = new Game();
    const game = await gameCtrl.getLastGame()
    const wallpaper = game.attributes.wallpaper
    const wallpaperPhone = game.attributes.wallpaperPhone
    const price = calcDiscountedPrice(game.attributes.price, game.attributes.discount)
    if (!game) return null
    return (
        <section className={styles.bannerLastGame}>
            <img src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${wallpaper.data.attributes.url}`} className={styles.wallpaper} alt="" />
            <img src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${wallpaperPhone.data.attributes.url}`} className={styles.wallpaperPhone} alt="" />
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