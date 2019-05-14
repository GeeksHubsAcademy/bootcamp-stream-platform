const environments = {
    production: "production",
    development: "development",
    test: "test"
}
const ENV = process.env.NODE_ENV || environments.development;
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';

console.log( 'Your environment is ' + ENV )
const config = {
    [ environments.production ]: {
        PORT: 80,
        MongoDB: {
            PORT: 27017,
            HOST: MONGO_HOST,
            DB: 'Bootcamp-Stream-Platform'
        }
    },
    [ environments.development ]: {
        PORT: 3001,
        DOMAIN: 'localhost',
        MongoDB: {
            PORT: 27017,
            HOST: MONGO_HOST,
            DB: 'Bootcamp-Stream-Platform_dev'
        }
    },

    [ environments.test ]: {
        PORT: 3001,
        MongoDB: {
            PORT: 27017,
            HOST: MONGO_HOST,
            DB: 'Bootcamp-Stream-Platform_test'
        }
    }
}
const CONFIG = config[ ENV ]
if ( !CONFIG ) {
    throw new Error( `NODE_ENV ${ENV} is not a valid environment. ` )
}
process.env = {
    ...process.env,
    ...CONFIG
}
