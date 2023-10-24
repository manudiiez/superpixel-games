"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './icon/Icon'
import { useSession } from 'next-auth/react'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useRouter } from 'next/navigation'

const WishListIcon = ({ gameId, className }) => {

    const router = useRouter()
    const { data: session, status } = useSession()
    if (status === 'loading') return null
    if (status === 'unauthenticated') return <FontAwesomeIcon icon={faHeart} onClick={() => router.push('/join/sign-in')} />

    return (
        <Icon className={className} token={session.user.jwt} userId={session.user.user.id} gameId={gameId} />

    )
}

export default WishListIcon