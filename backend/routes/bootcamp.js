const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const { authorization, isAdmin } = require('../utils/middleware/authorization');
router.get('/mine', authorization, (req, res) => {
  if (req.user.role === 'admin')
    return Bootcamp.find({})
      .then(bootcamps => res.send(bootcamps))
      .catch(res.send);

  Bootcamp.find({ user: { _id: req.user._id } })
    .then(bootcamps => res.status(200).send(bootcamps))
    .catch(res.send);
});
router.get('/:id', (req, res) => {
  Bootcamp.findById(req.params.id)
    .then(bootcamp => res.send(bootcamp))
    .catch(res.send);
});
router.post('/new', (req, res) => {
  new Bootcamp({
    title: req.body.title,
    description: req.body.description,
    startsAt: req.body.startsAt,
    weeksDuration: req.body.weeksDuration,
    users: req.body.users,
    posts: [],
  })
    .save()
    .then(Bootcamp => {
      res.send(Bootcamp);
    })
    .catch(console.log);
});
router.patch('/update/:id', (req, res) => {
  console.log(req.params.id, req.body);
  Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(Bootcamp => res.send(Bootcamp));
});
module.exports = router;
