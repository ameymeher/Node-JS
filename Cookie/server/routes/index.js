const express 			= require('express');
const router 			= express.Router();
const path 				= require('path');

router.get('/setCookie' , (req, res) => {
	res.cookie('name','express').send('cookie is now set');
});

router.get('/getCookie', (req,res) => {
	res.send(req.cookies);
});

module.exports = router;