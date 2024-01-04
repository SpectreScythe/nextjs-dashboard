import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from "@auth/core/providers/credentials";
import {z} from "zod"
import {QueryResultRow, sql} from "@vercel/postgres";
import {User} from "@/app/lib/definitions"
import bcrypt from "bcrypt";

async function getUser(email: string): Promise<QueryResultRow> {
    try{
        const user = await sql`SELECT * FROM users WHERE email=${email}`
        return user.rows[0];
    } catch (error) {
        console.log("Failed to find User: " + error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials){
            const parsedCredentials = z
                .object({email: z.string(),password: z.string().min(6)})
                .safeParse(credentials);

                if (parsedCredentials.success){
                    const {email,password} = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user){
                        return null;
                    }
                    const passwordsMatch = await bcrypt.compare(password,user.password);

                    if (passwordsMatch){
                        return user;
                    }

                    console.log("Invalid Credentials");
                    return null;
                }
            }
        }),
    ],
});