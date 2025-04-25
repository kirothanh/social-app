const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/users.controller")

router.post('/:id/follow', usersController.follow);
router.get('/suggestions/:id', usersController.getUsersNotFollowed)

module.exports = router;