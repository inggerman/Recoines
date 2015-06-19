/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
autoPK: false,
  attributes: {

  	ncontrol:{
  		type: 'string',
  		primaryKey:true,
  		required:true,
  		unique:true
  	},
  	password:{
  		type:'string',
  		required:true,
  		columnName: 'encrypted_password'
  	},
  	correo_pers:{
  		type:'email',
  		required:false,
  		unique:true
  	},

  	pd:{
  		model:'Personaldata'
  	}
	
  },
  beforeCreate:function(values,next){
  	hashPass(values,next);
  }
};

var bcrypt=require('bcrypt');// un modulo de node para encriptar las contraseñas en un hash

//funcion que encripta la contraseña de la tabla User
function hashPass(values,next){
	bcrypt.hash(values.password,10,function(err,hash){
		if(err) return next(err);
		values.password=hash;
		next();
	});
}
