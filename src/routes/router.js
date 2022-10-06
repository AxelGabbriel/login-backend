const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
//const room= require('../controllers/room')
//const puntaje=require('../controllers/puntaje')
//const passport=require('passport')
const  {passportAuth}  = require('../middlewares')






//registro y login
router.post('/registro',usuario.register)
router.post('/login', passportAuth)
router.get('/perfil',(req,res)=>{
    res.send('perfil')
})



module.exports = router