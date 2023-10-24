import React, { useEffect, useState } from 'react'
import GridGames from './gridGames/GridGames';
import { size } from 'lodash';
import NoResults from '@/components/shared/noResults/NoResults';
import { ENV } from '@/utils/constants';

const WishList = ({ token, userId }) => {
    const [wishlist, setWishlist] = useState(null);
    const hasGames = size(wishlist) > 0


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${ENV.CLIENT_API}/games/wishlist/${userId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                const result = await response.json()
                setWishlist(result)
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