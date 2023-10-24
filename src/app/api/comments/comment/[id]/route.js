import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMMENTS}/${params.id}`
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