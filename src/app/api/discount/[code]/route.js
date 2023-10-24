import { ENV } from "@/utils/constants";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const token = request.headers.get('authorization')
        const filters = `filters[code][$eq]=${params.code}`
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DISCOUNTS}/?${filters}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
            }
        });
        const result = await response.json()
        if (response.status !== 200) throw new Error('No existe ese cupon status')
        console.log(result.data.length);
        if (result.data.length < 1) throw new Error('No existe ese cupon')
        // if (result.data[0].attributes.quantity < 1) {
        //     console.log('no quedan');
        //     throw new Error('No quedan cupones')
        // }
        // const url2 = `${ENV.API_URL}/${ENV.ENDPOINTS.DISCOUNTS}/${result.data[0].id}`
        // const updateResponse = await fetch(url2, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `${token}`,
        //     },
        //     body: JSON.stringify({
        //         data: {
        //             quantity: result.data[0].attributes.quantity - 1
        //         }
        //     })

        // });
        // const updateResult = await updateResponse.json()
        // if (updateResponse.status !== 200) throw result
        return NextResponse.json(result.data[0])
    } catch (error) {
        throw error
    }

}
