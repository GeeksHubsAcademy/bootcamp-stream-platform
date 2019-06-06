const environments = {
    production: "production",
    development: "development",
    test: "test"
}
const ENV = process.env.NODE_ENV || environments.development;
console.log( 'Your environment is ' + ENV )
const config = {
  [environments.production]: {
    PORT: process.env.PORT,
    MongoDB: {
      URI: 'mongodb+srv://dbUser:' + process.env.MONGOPASS + '@cluster0-bc0aq.gcp.mongodb.net/stream?retryWrites=true&w=majority'
    },
  },
  [environments.development]: {
    PORT: 3001,
    DOMAIN: 'localhost',
    MongoDB: {
      PORT: 27017,
      HOST: 'localhost',
      DB: 'Bootcamp-Stream-Platform_dev',
    },
  },

  [environments.test]: {
    PORT: 3001,
    MongoDB: {
      PORT: 27017,
      HOST: 'localhost',
      DB: 'Bootcamp-Stream-Platform_test',
    },
  },
};
const CONFIG = config[ ENV ]
if ( !CONFIG ) {
    throw new Error( `NODE_ENV ${ENV} is not a valid environment. ` )
}
process.env = {
    ...process.env,
    ...CONFIG
}
