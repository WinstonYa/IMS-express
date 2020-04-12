var express = require('express');
var router = express.Router();

const userCtrl = require('./../controllers/userCtrl');
const sortCtrl = require('./../controllers/sortCtrl');
const articleCtrl = require('./../controllers/articleCtrl');
const loginCtrl = require('./../controllers/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin/login',loginCtrl.renderLogin);

router.get('/admin/user',userCtrl.show);
router.get('/admin/userCreate',userCtrl.create);
router.get('/admin/userEdit/:id',userCtrl.single);

router.get('/admin/sort',sortCtrl.show);
router.get('/admin/sortCreate',sortCtrl.create);
router.get('/admin/sortEdit/:id',sortCtrl.single);

router.get('/admin/article',articleCtrl.show);
router.get('/admin/articleCreate',articleCtrl.create);
router.get('/admin/articleEdit/:id',articleCtrl.single);

module.exports = router;
