import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const filters = `filters[slug][$eq]=${params.slug}`
        const populateGame = `populate[0]=wallpaper&populate[1]=cover&populate[2]=screenshots&populate[3]=platforms`
        const populatePlatform = `populate[4]=platforms.icon&populate[5]=wallpaperPhone`
        const populates = `${populateGame}&${populatePlatform}`
        const urlParams = `${filters}&${populates}`

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`

        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result.data[0])
    } catch (error) {
        throw error
    }

}
