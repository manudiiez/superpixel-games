import SearchPage from '@/components/search/SearchPage'
import { ENV } from '@/utils/constants'
import React from 'react'

const page = async ({ searchParams }) => {

    const { s, page = 1, platforms = '' } = searchParams

    const getData = async () => {
        try {
            const response = await fetch(`${ENV.CLIENT_API}/games/search?s=${s}&page=${page}&platforms=${platforms}`)
            const result = await response.json()
            return result
        } catch (error) {
            console.log(error);
        }
    }

    const data = await getData()
    const games = await data.data
    const pagination = await data.meta.pagination

    return <SearchPage games={games} pagination={pagination} searchText={s} />
}

export default page