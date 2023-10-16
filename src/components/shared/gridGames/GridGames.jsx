import Link from "next/link";
import Discount from "../discount/Discount";
import calcDiscountedPrice from "@/utils/func";
import { ENV } from "@/utils/constants";
import styles from './gridGames.module.scss'
import { map } from "lodash";

const GridGames = ({ games }) => {

    return (
        <div className={styles.gridGames}>
            {
                map(games, (game) => (
                    <Link href={`/${game.attributes.slug}`} key={game.id} className={styles.game}>
                        <div>
                            <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} className={styles.wallpaper} />
                            {/* {game.attributes.discount > 0 && (
                                <Discount className={styles.discount}>
                                    {`-${game.attributes.discount}%`}
                                </Discount>
                            )} */}
                        </div>
                        <div>
                            <span>{game.attributes.title}</span>
                            <p>{game.attributes.releaseDate}</p>
                            <span className={styles.price}>
                                {calcDiscountedPrice(game.attributes.price, game.attributes.discount)}$
                            </span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default GridGames