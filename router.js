var express = require("express")
var router = express.Router()

var addfoodcontroler=require('./controler/addfoodcontroler')

router.post('/fooddetails',addfoodcontroler.addmenudetail)
router.get('/viefooddetails',addfoodcontroler.fooddetaildfind)


module.exports = router

