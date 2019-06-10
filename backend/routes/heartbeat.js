const router = require('express').Router();

const Presence = require('../models/Presence');

const { authorization } = require('../middleware/authorization');

router.post('/', authorization, async (req, res) => {


  const { latitude, longitude , accuracy} = req.body;
  const userId = req.user._id;
  try {
    let record = await Presence.newRecord({ latitude, longitude, accuracy }, userId);
     res.json({
       message:
         'elapsed time since last heartbeat: ' +
         (record.registeredMilliseconds / (60 * 1000)).toFixed(1) + ' minutes',
     });
  } catch (error) {
     res.status(500).json({ message: 'ups' });
    console.error(error);
  }
});
module.exports = router;
