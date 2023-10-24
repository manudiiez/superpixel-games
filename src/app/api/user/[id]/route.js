import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        console.log(token);
        const body = await request.json()
        console.log(body);
        console.log(params.id);
        const url = `${process.env.API_URL}/${process.env.ENDPOINT_USERS}/${params.id}`
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