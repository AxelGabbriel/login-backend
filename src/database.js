const {Pool}= require('pg');
const helpers= require('./helpers')
const config={
    
  host:'Localhost',
  user:'postgres',
  database:'KRAKEN',
  password:'axel'

  /*connectionString: process.env.DATABASE_URL,
    max:500,
    min:100,
    ssl:{rejectUnauthorized:false}*/
};

const pool = new Pool(config);

//funcion de crear usuario para registro
const crearusuario= async(req,res)=>{
    
const  { 
     username,
     correo,
     nombre,                             
     contraseña,
     verificarclave
      }= req.body;
      
      if(contraseña===verificarclave){

     const passwordencriptado = await helpers.encryptPassword(contraseña)
      const result= await pool.query('INSERT INTO usuario(username,correo,nombre,contraseña) VALUES($1,$2,$3,$4)', [
     username,correo,nombre,passwordencriptado ])
      console.log(result)
      res.json(result.rows)

      }else{
        res.json('contraseñas no compatibles')
      }
    }


    module.exports={
         crearusuario
        
        
     }