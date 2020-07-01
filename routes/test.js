const express = require('express');
const router = express.Router();
const Comments = require('../store/Comment');

router.get('/', function(_, res) {
  Comments.find().then(messages => res.render('test', {messages}))
});


module.exports = router;
