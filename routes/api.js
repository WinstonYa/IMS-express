var express = require('express');
var router = express.Router();

const userCtrl = require('./../controllers/userCtrl');
const sortCtrl = require('./../controllers/sortCtrl');
const articleCtrl = require('./../controllers/articleCtrl');
const loginCtrl = require('./../controllers/login');

router.post('/login',loginCtrl.login);

router.post('/user',userCtrl.insert);
router.delete('/user/:id',userCtrl.delete);
router.put('/user/:id',userCtrl.edit);

router.post('/sort',sortCtrl.insert);
router.delete('/sort/:id',sortCtrl.delete);
router.put('/sort/:id',sortCtrl.edit);

router.post('/article',articleCtrl.insert);
router.delete('/article/:id',articleCtrl.delete);
router.put('/article/:id',articleCtrl.edit);

module.exports = router;
