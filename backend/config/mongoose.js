const mongoose = require( 'mongoose' );
const { PORT, DB, HOST, URI } = process.env.MongoDB;
mongoose.connect(URI || `mongodb://${HOST}:${PORT}/${DB}`, { useCreateIndex: true, useNewUrlParser: true } )
    .then( () => console.log( `Connected to database mongodb://${HOST}:${PORT}/${DB}` ) )
    .catch( ( e ) => console.log( 'Connection to MongoDB failed!:( \n' + e ) )

module.exports = mongoose
