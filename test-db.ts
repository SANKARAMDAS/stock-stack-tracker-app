import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars from .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
    console.log('--- Testing Database Connection ---');
    console.log('URI:', MONGODB_URI ? 'Defined' : 'UNDEFINED');
    
    if (!MONGODB_URI) {
        console.error('Error: MONGODB_URI is not defined in components/.env');
        process.exit(1);
    }

    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI, { bufferCommands: false });
        console.log('Successfully connected to MongoDB!');
        
        // Try a simple operation
        if (mongoose.connection.db) {
            const collections = await mongoose.connection.db.listCollections().toArray();
            console.log(`Connection verified. Found ${collections.length} collections.`);
        } else {
            console.log('Connection verified, but database object is undefined.');
        }
        
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB.');
        console.log('--- Test Passed ---');
    } catch (error) {
        console.error('--- Test Failed ---');
        console.error('Connection error:', error);
        process.exit(1);
    }
}

testConnection();
