const Multer = require( 'multer' );
const path = require( 'path' )
const mimetypes = [ 'image/png', 'image/jpg', 'image/jpeg' ];
const fileTypes = ['application/msword', 'application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.ms-excel'];
const uploadProfilePics = Multer( {
    storage: Multer.diskStorage( {
        destination: ( req, file, callback ) => {
            callback( null, './public/uploads/profilePics' );
        },
        filename: ( req, file, callback ) => {
            callback( null, Date.now() + '-' + file.originalname );
        },
    } ),
    fileFilter: ( req, file, callback ) => {

        if ( mimetypes.includes( file.mimetype ) ) {
            callback( null, true )
        } else {
            callback( null, false )
        }
    },
    limits: { fileSize: 2 * 1024 * 1024 }
} );
const uploadFiles = Multer({
    storage: Multer.diskStorage({
        destination: ( req, file, callback) => {
            callback(null, './public/uploads/files');
        },
        filename: ( req, file, callback)=> {
            callback(null, Date.now() + '-' + file.originalname);
        },
    }),
    fileFilter: (req, file, callback) => {
        if ( fileTypes.includes( file.mimetype ) ) {
            callback( null, true )
        } else {
            callback( null, false )
        }
    }
})
module.exports = {uploadProfilePics, uploadFiles};
