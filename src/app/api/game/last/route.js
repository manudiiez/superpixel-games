import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const sort = 'sort[0]=publishedAt:desc'
        const pagination = 'pagination[limit]=2'
        const populate = 'populate=*'
        const url = `${process.env.API_URL}/${process.env.ENDPOINT_GAME}?${sort}&${pagination}&${populate}`
        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result.data)
    } catch (error) {
        throw error
    }

}
