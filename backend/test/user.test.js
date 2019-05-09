const server=require('../index')
const chai=require('chai')
const chaiHttp = require('chai-http');
const expect=chai.expect;
chai.use(chaiHttp);
it('should throw an error if no authorization header is present',(done)=>{
    chai.request(server)
    .get('/user/')
    .end((err, res) => {
        expect(res.error.status).to.be.equal(401)
        expect(res.error.text).to.be.equal('jwt must be provided');
        done ();
    });
});
