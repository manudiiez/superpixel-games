import { Games } from '@/api/games'
import SearchPage from '@/components/search/SearchPage'
import { ENV } from '@/utils/constants'
import React from 'react'

const Page = async ({ searchParams }) => {
    const gamesCtrl = new Games()
    const { s, page = 1, platforms = '' } = searchParams
    const data = await gamesCtrl.getSearchGames(s, page, platforms)
    const games = await data.data
    const pagination = await data.meta.pagination

    return <SearchPage games={games} pagination={pagination} searchText={s} platforms={platforms} />
}

export default Page