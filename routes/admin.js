const express=require('express')
const {getStudentDetails}=require('../controllers/admin')

const router=express.Router()

router.get('/getStudentData',getStudentDetails)

module.exports=router