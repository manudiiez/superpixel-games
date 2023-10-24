"use client"
import WishList from '@/components/account/wishList/WishList';
import { useSession } from 'next-auth/react';


const page = () => {

    const { data: session, status } = useSession()

    if (status === 'loading') return null
    return (
        <WishList token={session.user.jwt} userId={session.user.user.id} />
    )
}

export default page
