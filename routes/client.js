var express = require('express');
var router = express.Router();
var Logic=require('../datatool/logic.js')
var LogicManager= new Logic()
LogicManager.init();
router.all('/uploadinfo', function(req, res, next) {
    LogicManager.insert_table_dector_item(req,res,next);
});
router.all('/showinfo', function(req, res, next) {
    LogicManager.showdata(req,res,next);
});






module.exports = router;
