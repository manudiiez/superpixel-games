import styles from './home.module.scss'
import BannerLastGame from '@/components/home/bannerLastGame/BannerLastGameContainer'
import BannerVideo from '@/components/shared/bannerVideo/BannerVideo'
import GamesList from '@/components/shared/gamesList/GamesList'
import Separator from '@/components/shared/separator/Separator'

const Page = () => {
  return (
    <>
      <BannerLastGame />
      <Separator height={100} />
      <section className={styles.container}>
        <GamesList title="Ultimos lanzamientos" url='latest' />
      </section>
      <Separator height={100} />
      <section className={styles.container}>
        <GamesList title="POPULARES" url='popular' />
      </section>
      <Separator height={100} />
      <BannerVideo title='¡Sumérgete en el mundo de la aventura! Descubre los juegos más emocionantes en nuestra tienda.' />
      <Separator height={100} />
      <section className={styles.container}>
        <GamesList title="PS4" platformId={1} url='ps4' />
      </section>
      <Separator height={150} />

    </>
  )
}

export default Page