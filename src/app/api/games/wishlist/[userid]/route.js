import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        const filters = `filters[user][id][$eq]=${params.userid}`
        const populate = `populate[0]=game&populate[1]=game.cover`
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${filters}&${populate}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,

            }
        });
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result.data)
    } catch (error) {
        throw error
    }

}