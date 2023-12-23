import { NextResponse } from "next/server";
import MercadoPagoConfig, { Payment } from "mercadopago";




export const POST = async (request) => {
    const body = await request.json()
    try {
        const client = new MercadoPagoConfig({
            accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
        });

        const payment = new Payment(client);
        const data = {
            transaction_amount: 120,
            description: '<DESCRIPTION>',
            payment_method_id: '<PAYMENT_METHOD_ID>',
            payer: {
                email: '<EMAIL>'
            },
        };
        const response = await payment.create({ data });
        return NextResponse.json({ "hola": "aba" })

    } catch (error) {
        throw error
    }
}

