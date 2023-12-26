import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        const { searchParams } = new URL(request.url)
        const limit = searchParams.get('limit') || 3

        const filters = `filters[id][$eq][0]=3&filters[id][$eq][1]=1&filters[id][$eq][2]=2`
        const filterLimit = limit && `pagination[limit]=${limit}`
        const populate = `populate=*`
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_GAME}?${filterLimit}&${filters}&${populate}`

        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }

}
