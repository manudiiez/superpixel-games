import Media from '@/components/game/media/Media'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './game.module.scss'
import Image from 'next/image'
import { ENV } from '@/utils/constants'
import Header from '@/components/game/header/Header'
import Separator from '@/components/shared/separator/Separator'
import Info from '@/components/game/info/Info'
import Comments from '@/components/game/comments/CommentsContainer'
import GamesList from '@/components/shared/gamesList/GamesList'

const page = async ({ params }) => {

    const { game } = params

    const getGameData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/game/${game}`)
            const result = await response.json()
            return result
        } catch (error) {
            console.log(error);
        }
    }

    const gameData = await getGameData()
    const wallpaper = gameData.attributes.wallpaper
    const wallpaperPhone = gameData.attributes.wallpaperPhone
    const video = gameData.attributes.video
    const screenshots = gameData.attributes.screenshots.data
    return (
        <>
            <section className={styles.hero}>
                <img src={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`} className={styles.wallpaper} alt="" />
                <img src={`${ENV.SERVER_HOST}${wallpaperPhone.data.attributes.url}`} className={styles.wallpaperPhone} alt="" />
                <div>
                    <div className={styles.content}>
                        <Link href='/'>
                            <FontAwesomeIcon icon={faAngleLeft} />
                            Volver a la tienda
                        </Link>
                        <Separator height={30} />
                        <Header title={gameData.attributes.title} gameId={gameData.id} />
                        <Separator height={40} />
                        <Media video={video} screenshots={screenshots} />
                    </div>
                </div>
            </section>
            <Separator height={50} />
            <Info game={gameData} />
            <Separator height={100} />
            <Comments gameId={gameData.id} />
            <Separator height={100} />
            <section className={styles.container}>
                <GamesList title="POPULARES" url='games/popular' />
            </section>
            <Separator height={100} />
        </>
    )
}

export default page