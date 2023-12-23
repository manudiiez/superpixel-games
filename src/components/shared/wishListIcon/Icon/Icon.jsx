"use client"
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import styles from './icon.module.scss'
import classNames from 'classnames';
import { Game } from '@/api/game';

const Icon = ({ userId, token, className, gameId }) => {
    const [hasWishList, setHasWishList] = useState(null);
    const gameCtrl = new Game()
    const addWishList = async () => {
        try {
            setHasWishList(await gameCtrl.addGameWishList(userId, gameId, token))
        } catch (error) {
            console.log(error);
        }
    }


    const deleteWishList = async () => {
        try {
            try {
                await gameCtrl.deleteGameWishList(hasWishList.id, token)
                setHasWishList(false)
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                setHasWishList(await gameCtrl.verifyGameWishList(userId, gameId, token))
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <FontAwesomeIcon icon={hasWishList ? faHeartSolid : faHeart} onClick={hasWishList ? deleteWishList : addWishList} className={classNames(styles.wishListIcon, {
            [className]: className
        })} />
    )
}

export default Icon