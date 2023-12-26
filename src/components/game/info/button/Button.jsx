"use client"
import Loader from '@/components/shared/loader/Loader';
import { useCart } from '@/hooks/useCart';
import React, { useState } from 'react'

const Button = ({ gameId }) => {
    const [loading, setLoading] = useState(false);
    const { addCart } = useCart()

    const addCartWrapper = () => {
        setLoading(true)
        addCart(gameId)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }
    return (
        <button onClick={addCartWrapper} disabled={loading}>
            {
                loading ? <Loader height={28} width={28} /> : "Agregar al carrito"
            }
        </button>
    )
}

export default Button