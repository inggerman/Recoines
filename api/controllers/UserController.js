module.exports = {


	new:function(req,res){
		console.log("registro");
		res.view('user/singin');
	},

create:function(req,res){
	// var userObj={
	// 	ncontrol:req.param('ncontrol'),
	// 	password:req.param('password'),
	// 	nombre:req.param('nombre'),
	// 	apellido_p:req.param('apellido_p'),
	// 	apellido_m:req.param('apellido_m'),
	// 	correo_inst:req.param('correo_inst'),
	// 	correo_pers:req.param('correo_pers')
	// }

	var userObj=req.params.all();
	
	User.create(userObj,function(err,user){
		if(err){
			console.log(err)
			return res.redirect('user/new')
		}
		res.redirect('user');
	})
}
	
	// create: function(req,res,next){
	// 	User.create(req.params.all(),function(err,user){
	// 		if(err) return next(err);
	// 		if(req.wantsJSON) return req.json(201,user);
	// 		else return res.redirect('/user/'+user.ncontrol);
	// 	});
	// }

	
};