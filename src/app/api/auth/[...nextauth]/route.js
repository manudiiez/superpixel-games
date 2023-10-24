import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { ENV } from "@/utils/constants";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { identifier, password } = credentials;
                try {
                    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ identifier, password }),
                    });
                    const result = await response.json()
                    if (response.status !== 200) throw result
                    console.log(result);
                    return result;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },

        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/join/sign-in",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
