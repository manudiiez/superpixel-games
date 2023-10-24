import { MercadoPagoConfig } from "mercadopago";

const client = new MercadoPagoConfig({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

const payment = new Payment(client);