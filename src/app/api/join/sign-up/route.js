import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json()
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
