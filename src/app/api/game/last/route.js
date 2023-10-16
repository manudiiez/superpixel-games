import { NextResponse } from "next/server";
import { ENV } from "@/utils/constants";

export const GET = async () => {
    try {
        const sort = 'sort[0]=publishedAt:desc'
        const pagination = 'pagination[limit]=2'
        const populate = 'populate=*'

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`
        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result.data)
    } catch (error) {
        throw error
    }

}
