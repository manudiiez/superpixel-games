import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const populateGame = `populate[0]=cover&populate[1]=platform`
        const urlParams = `${populateGame}`
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}/${params.id}?${urlParams}`
        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }

}
