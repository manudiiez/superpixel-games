import Link from "next/link";
import styles from './gridGames.module.scss'
import { map } from "lodash";
import { ENV } from "@/utils/constants";
import calcDiscountedPrice from "@/utils/func";
import Discount from "@/components/shared/discount/Discount";
import WishListIcon from "@/components/shared/wishListIcon/WishListIcon";

const GridGames = ({ games }) => {
    console.log(games);

    return (
        <div className={styles.gridGames}>
            {
                map(games, (item) => {
                    const game = item.attributes.game.data
                    return (
                        <Link href={`/${game.attributes.slug}`} key={game.id} className={styles.game}>
                            <div>
                                <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} className={styles.wallpaper} />
                                {game.attributes.discount > 0 && (
                                    <Discount className={styles.discount}>
                                        {`-${game.attributes.discount}%`}
                                    </Discount>
                                )}
                            </div>
                            <div>
                                <span>{game.attributes.title}</span>
                                <p>{game.attributes.releaseDate}</p>
                                <span className={styles.price}>
                                    {calcDiscountedPrice(game.attributes.price, game.attributes.discount)}$
                                </span>
                                {/* <WishListIcon gameId={game.id} className={styles.heart} /> */}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default GridGames