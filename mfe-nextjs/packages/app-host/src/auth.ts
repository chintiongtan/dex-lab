import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: (credentials) => {
                return {
                    userId: "00000",
                    email: 'john.doe@gg.com',
                    firstName: "John",
                    lastName: "Doe"
                }
            }
        })
    ]
})
