import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT || 3030,
    POSTGRES: {
        DATABASE_URL: process.env.DATABASE_URL,
    }
};

export { config };