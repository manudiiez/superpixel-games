"use client"
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import styles from './icon.module.scss'
import classNames from 'classnames';
import { ENV } from '@/utils/constants';

const Icon = ({ userId, token, className, gameId }) => {
    const [hasWishList, setHasWishList] = useState(null);

    const addWishList = async () => {
        try {
            const response = await fetch(`${ENV.CLIENT_API}/game/wishlist/${gameId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "Id": `${userId}`,
                }
            });
            setHasWishList(await response.json())
        } catch (error) {
            console.log(error);
        }
    }


    const deleteWishList = async () => {
        try {
            try {
                const url = `${ENV.CLIENT_API}/game/wishlist/${hasWishList.id}`
                await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setHasWishList(false)
                // if (removeCallback) removeCallback()
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async (token, id) => {
            try {
                const response = await fetch(`${ENV.CLIENT_API}/game/wishlist/${gameId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                        "Id": `${id}`,

                    }
                });
                setHasWishList(await response.json())
            } catch (error) {
                console.log(error);
            }
        })(token, userId)
    }, [])

    return (
        <FontAwesomeIcon icon={hasWishList ? faHeartSolid : faHeart} onClick={hasWishList ? deleteWishList : addWishList} className={classNames(styles.wishListIcon, {
            [className]: className
        })} />
    )
}

export default Icon