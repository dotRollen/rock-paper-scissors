const db = require('../models');

module.exports = {
  findById(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail(req, res) {
    db.User
      .findOne(req.params.email)
      .then(db = res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.User
      .findOneAndUpdate(req.params.id)
      .the(dbModel = res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.User
      .delete(something);
  },
};
