import styles from './home.module.scss'
import BannerLastGame from '@/components/home/bannerLastGame/BannerLastGame'
import GamesList from '@/components/shared/gamesList/GamesList'
import BannerVideo from '@/components/shared/bannerVideo/BannerVideo'
import Separator from '@/components/shared/separator/Separator'

const Page = () => {
  return (
    <>
      <BannerLastGame />
      <Separator height={100} />
      <section className={styles.container}>
        <GamesList title="Ultimos lanzamientos" />
      </section>
      <Separator height={100} />
      <section className={styles.container}>
        <GamesList title="POPULARES" url='games/popular' />
      </section>
      <Separator height={100} />
      <BannerVideo title='¡Sumérgete en el mundo de la aventura! Descubre los juegos más emocionantes en nuestra tienda.' />
      <Separator height={100} />
      <section className={styles.container}>
        <GamesList title="PS4" platformId={1} />
      </section>
      <Separator height={150} />

    </>
  )
}

export default Page