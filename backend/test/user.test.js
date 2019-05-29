const server = require( '../index' )
const request = require( 'supertest' );

describe( 'GET /user', () => {
    it( 'should ask for jwt if no authorization header is present', ( done ) => {
        request( server )
            .get( '/user' )
            .expect( ( res ) => {
                res.error.text = 'jwt must be provided'
            } )
            .expect( 401, done )
    } );
} );
describe( 'POST /user/register', () => {
    it( 'sends a register request and responds with json', function ( done ) {
        let user = { name: 'john', lastname: 'smith', password: 12345678, email: 'sample@email.com', }
        request( server )
            .post( '/user/register' )
            .send( user )
            .set( 'Accept', 'application/json' )
            .expect( 'Content-Type', /json/ )
            .expect(function(res) {
                res.body.info = 'user successfully created';
                res.body.user.name = user.name;
                res.body.user.lastname = user.lastname;
                res.body.user.email = user.email;
              })
            .expect( 200, done )
    } );
} )
