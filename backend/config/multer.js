const Multer = require( 'multer' );
const path=require('path')
const mimetypes=['image/png','image/jpg','image/jpeg']
const uploadProfilePics = Multer(  {
    storage: Multer.diskStorage( {
        destination: ( req, file, callback ) => {
            callback( null, './public/uploads/profilePics' );
        },
        filename: ( req, file, callback ) => {
            callback( null,  Date.now() +'-'+file.originalname );
        },
    }),
    fileFilter: ( req, file, callback ) => {

        if ( mimetypes.includes(file.mimetype)) {
            callback(null , true)
        } else {
            callback( null, false )
        }
    },
    // limits: {fileSize: 2*1024*1024}
});

module.exports = uploadProfilePics;