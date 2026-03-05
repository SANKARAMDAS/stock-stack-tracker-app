import { betterAuth } from "better-auth";
import { connectToDatabase} from "../../database/mongoose";
import { nextCookies} from "better-auth/next-js";
import { mongodbAdapter} from "@better-auth/mongo-adapter";


let authInstance: any = null;

export const getAuth = async () => {
    if(authInstance) return authInstance;

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if(!db) throw new Error('Database connection failed');

    authInstance = betterAuth({
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET!,
        baseUrl: process.env.BETTER_AUTH_URL!,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 100,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });

    return authInstance;
}

export const auth = await getAuth();