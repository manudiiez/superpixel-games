import GridGames from "@/components/shared/gridGames/GridGames";
import styles from './gamesList.module.scss'
import { ENV } from "@/utils/constants";

const GamesList = async ({ title, limit = 3, platformId = '', url = 'games/latest' }) => {

    const getGames = async () => {
        try {
            const response = await fetch(`${ENV.CLIENT_API}/${url}?limit=${limit}&platformId=${platformId}`)
            const result = await response.json()
            return result.data
        } catch (error) {
            console.log(error);
        }
    }

    const games = await getGames()
    return (
        <div className={styles.gamesList}>
            <h2>{title}</h2>
            <GridGames games={games} />
        </div>
    )
}

export default GamesList