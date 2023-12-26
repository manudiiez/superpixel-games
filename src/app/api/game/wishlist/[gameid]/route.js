import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    try {
        const userId = request.headers.get('id')
        const token = request.headers.get('authorization')
        const filterUser = `filters[user][id][$eq][0]=${userId}`
        const filterGame = `filters[game][id][$eq][1]=${params.gameid}`
        const urlParams = `${filterUser}&${filterGame}`
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_WISHLIST}?${urlParams}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,

            }
        });
        const result = await response.json()
        if (response.status !== 200) throw result
        if (result.data.length === 0) {
            return NextResponse.json(false)
        }
        return NextResponse.json(result.data[0])
    } catch (error) {
        throw error
    }
}

export const POST = async (request, { params }) => {
    try {
        const userId = request.headers.get('id')
        const token = request.headers.get('authorization')
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_WISHLIST}`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,

            },
            body: JSON.stringify({
                data: {
                    user: userId,
                    game: params.gameid
                }
            })
        });

        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result.data)
    } catch (error) {
        throw error
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_WISHLIST}/${params.gameid}`
        const response = await fetch(url, {
            method: "DELETE",
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
