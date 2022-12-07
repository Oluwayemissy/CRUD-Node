const { Router }= require('express');
const router = Router();
const users = require('../controllers/users.controller');


router.get('/users', users.fetchAllUsers);

router.post('/create_user', users.createUsers);

router.get('/user/:id', users.getOneUser);

router.patch('/user/:id', users.updateUser);

router.delete('/user/:id', users.deleteUser);

module.exports = router;