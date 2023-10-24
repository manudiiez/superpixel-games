import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        const { searchParams } = new URL(request.url)
        const limit = searchParams.get('limit') || 3
        const platformId = searchParams.get('platformId') || null

        const filterPlatform = platformId && `filters[platforms][id][$eq]=${platformId}`
        const filterLimit = limit && `pagination[limit]=${limit}`
        const sort = `sort[0]=publishedAt:desc`
        const populate = `populate=*`
        const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${sort}&${filterLimit}&${filterPlatform}&${populate}`

        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }

}
