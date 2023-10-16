export default function calcDiscountedPrice(price, discount) {
    if (!discount) return price
    return price - ((price * discount) / 100);
}