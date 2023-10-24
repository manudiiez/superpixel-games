import Discount from '@/components/shared/discount/Discount';
import styles from './info.module.scss'
import { map } from 'lodash';
import calcDiscountedPrice from '@/utils/func';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import Button from './button/Button';

const Info = ({ game }) => {
    const platforms = game.attributes.platforms.data
    const price = calcDiscountedPrice(game.attributes.price, game.attributes.discount)
    return (
        <section className={styles.info}>
            <div className={styles.content}>
                <div className={styles.data}>
                    <div className={styles.card}>
                        <div>
                            <h2>{game.attributes.title}</h2>
                            <Discount className={styles.discount}>-{game.attributes.discount}%</Discount>
                        </div>
                        <div>
                            {
                                map(platforms, (platform) => (
                                    <p key={platform.id}>{platform.attributes.name}</p>
                                ))
                            }
                        </div>
                        <div className={styles.price}>
                            <p>
                                <FontAwesomeIcon icon={faTag} />
                                {game.attributes.price}$</p>
                            <h3>{price}$</h3>
                        </div>
                        {/* <button>Agregar al carrito</button> */}
                        <Button gameId={game.id} />
                    </div>
                    <div className={styles.summary}>
                        <p>{game.attributes.summary}</p>
                    </div>

                </div>
                <div className={styles.more}>
                    <p>Fecha de lanzamiento: <span>{game.attributes.releaseDate}</span></p>
                </div>
            </div>
        </section>
    )
}

export default Info