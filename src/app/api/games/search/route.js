import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const { searchParams } = new URL(request.url)
        const page = searchParams.get('page') || 1
        const text = searchParams.get('s') || ''
        const platform = searchParams.get('platforms') || ''
        const filterSearch = `filters[title][$contains]=${text}`
        const filterPlatform = platform && `filters[platforms][slug][$contains]=${platform}`
        const filters = `${filterSearch}&${filterPlatform}`
        const pagination = `pagination[page]=${page}&pagination[pageSize]=6`
        const populate = `populate=*`
        const urlParams = `&${pagination}&${populate}&${filters}`
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_GAME}?${urlParams}`
        const response = await fetch(url);
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }

}
