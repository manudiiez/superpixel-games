export { default } from "next-auth/middleware";

export const config = { matcher: ["/account", "/account/wishlist", "/cart", '/account/settings'] };
