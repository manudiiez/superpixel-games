import React, { useEffect, useState } from 'react'
import GridGames from './gridGames/GridGames';
import { size } from 'lodash';
import NoResults from '@/components/shared/noResults/NoResults';
import { Games } from '@/api/games';

const WishList = ({ token, userId }) => {
    const [wishlist, setWishlist] = useState(null);
    const hasGames = size(wishlist) > 0
    const gamesCtrl = new Games()
    useEffect(() => {
        (async () => {
            try {
                setWishlist(await gamesCtrl.getWishListGame(userId, token))
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    if (!wishlist) return null
    return (
        <section>
            {
                hasGames ? (
                    <GridGames games={wishlist} />
                ) : (
                    <NoResults />
                )
            }
        </section>
    )
}

export default WishList