const express = require( 'express' );
const app = express();
const morgan = require('morgan')
const path = require('path')

const port = process.env.PORT || 3001;


// BODY PARSE TO JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Expose-Headers', 'Authentication');
    next();
  });

app.use(morgan('tiny'))
app.use('/', express.static(path.join(__dirname, 'public')))

// app.use('/user', userRoutes)

app.listen( port, () => console.log( 'Servidor levantado en ' + port ) );
