const router = require('express').Router();

const Presence = require('../models/Presence');

const { authorization } = require('../middleware/authorization');

router.post('/', authorization, async (req, res) => {
  console.log('new heartbeat', req.body, req.user._id);
  res.send(req.body);

  const { latitude, longitude } = req.body;
  const userId = req.user._id;
  try {
    let res = await new Presence({
      location: {
        latitude,
        longitude,
      },
      userId,
    }).save();
    console.log(res);
  } catch (error) {
    console.error(error);
  }

  // Presence.find( {} ).then( users => res.send( users ) )
  //     .catch( error => res.status( 500 ).send( error ) );
});
module.exports = router;
