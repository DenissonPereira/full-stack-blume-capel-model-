import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = {
                    id: '1',
                    email: 'denisson@email.com',
                    password: '123',
                    name: 'Denisson',
                    role: 'admin',
                }

                const isValidEmail = user.email === credentials?.email
                const isValidPassword = user.password === credentials?.password

                if (!isValidEmail || !isValidEmail) {
                    return null
                }

                return user

            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            const customUser = user as unknown as any
            
            if (user) {
                return {
                    ...token,
                    role: customUser.role
                }
            }

            return token
        },
        session: async ({ session, token}) => {
            return {
                ...session,
                user: {
                    email: token.email,
                    role: token.role
                }
            }
        }
    },
    pages: {
        signIn: '/auth/login'
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }