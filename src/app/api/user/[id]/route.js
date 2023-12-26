import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        const body = await request.json()
        const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ENDPOINT_USERS}/${params.id}`
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            },
            body: JSON.stringify(body),
        });
        const result = await response.json()
        if (response.status !== 200) throw result
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }

}