import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        const filters = `filters[code][$eq]=${params.code}`
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_DISCOUNTS}/?${filters}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            }
        });
        const result = await response.json()
        if (response.status !== 200) throw new Error('No existe ese cupon status')
        if (result.data.length < 1) throw new Error('No existe ese cupon')
        return NextResponse.json(result.data[0])
    } catch (error) {
        throw error
    }

}
