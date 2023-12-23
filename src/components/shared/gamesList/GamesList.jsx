import GridGames from "@/components/shared/gridGames/GridGames";
import styles from './gamesList.module.scss'
import { Games } from "@/api/games";

const GamesList = async ({ title, platformId = '', url = false }) => {
    const gamesCtrl = new Games()
    let games = null
    if (url === 'latest') {
        games = await gamesCtrl.getLastestGames()
    } else if (url === 'popular') {
        games = await gamesCtrl.getPopularGames()
    } else {
        games = await gamesCtrl.getPlatformGames(platformId)
    }
    if (!games) return null
    return (
        <div className={styles.gamesList}>
            <h2>{title}</h2>
            <GridGames games={games.data} />
        </div>
    )
}

export default GamesList