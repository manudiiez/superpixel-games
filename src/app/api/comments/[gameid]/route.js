import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const filters = `filters[game][id][$eq]=${params.gameid}`
        const sort = `sort[0]=createdAt:desc`
        const populate = `populate=user`
        const urlParams = `${filters}&${sort}&${populate}`
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMMENTS}?${urlParams}`
        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result.data)
    } catch (error) {
        throw error
    }

}

export const POST = async (request, { params }) => {
    try {
        const body = await request.json()
        const userId = request.headers.get('id')
        const token = request.headers.get('authorization')
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMMENTS}`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,

            },
            body: JSON.stringify({
                data: {
                    user: userId,
                    game: params.gameid,
                    comment: body.comment
                }
            })
        });

        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }
}