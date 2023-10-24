import React, { useEffect, useState } from 'react'
import GridGames from './gridGames/GridGames';
import { size } from 'lodash';
import NoResults from '@/components/shared/noResults/NoResults';

const WishList = ({ token, userId }) => {
    const [wishlist, setWishlist] = useState(null);
    const hasGames = size(wishlist) > 0


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/games/wishlist/${userId}`, {
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