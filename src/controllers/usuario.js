const usuario = {}
const bd = require('../database')



usuario.register= (req,res)=>{
    try{
    bd.crearusuario(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

   module.exports= usuario