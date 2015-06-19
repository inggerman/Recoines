/**
* Personaldata.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	nombre:{
  		type:'string',
  		required:true,
  	},
  	apellido_p:{
  		type:'string',
  		required:true
  	},
  	apellido_m:{
  		type:'string',
  		required:true
  	},
  	correo_inst:{
  		type:'email',
  		required:true,
  		unique:true
  	},
  	edad:{
  		type:'numeric',
  		required:true,
  	},
  	user:{
  		model:'User'
  	}
  }
};

