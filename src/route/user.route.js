const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller")

router.get('/', userController.index);

router.get('/:id', userController.show);

module.exports = router;