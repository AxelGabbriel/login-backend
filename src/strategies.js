const passport = require('passport');
const { Strategy } = require('passport-local');
const { Pool } = require('pg');
const helpers =require('./helpers')

const config={
  
  host:'Localhost',
  user:'postgres',
  database:'KRAKEN',
  password:'axel'
  
};
  
  const pool = new Pool(config); 
  
  const LocalStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  async (username, password, done) => {
    try {
      
      const user={
        username:username,
        clave:password
      }
      const result= await pool.query('SELECT* FROM usuario WHERE username=$1',[user.username])
      if(result.rows.length>0){
         const newuser =result.rows[0];
         const validpassword= await helpers.compararclave(user.clave,newuser.contraseña) 
        
         if(validpassword){
          
          done(null,false,console.log('bienvenido'))
          


         }else{
              done(null,false,console.log('password incorrecto'))
              
         }
      }else{
        return done(null, false,console.log('el usuario no existe'))   
        
      }
      
    } catch (e) {
      console.log(e);
      return done(null, false);
    }
  }
);





module.exports={
  LocalStrategy
}