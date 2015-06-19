/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

User.create({ncontrol:'10370710',password:'perro',nombre:'german',apellido_p:'hdz',apellido_m:'lpz',correo_inst:'pato1@cc.com'}).exec(console.log);
User.create({ncontrol:'10370711',password:'perro',nombre:'fgfdg',apellido_p:'hdz',apellido_m:'lpz',correo_inst:'pato2@cc.com'}).exec(console.log);
User.create({ncontrol:'10370712',password:'perro',nombre:'marlux',apellido_p:'hdz',apellido_m:'lpz',correo_inst:'pato3@cc.com'}).exec(console.log);
User.create({ncontrol:'10370713',password:'perro',nombre:'pato',apellido_p:'hdz',apellido_m:'lpz',correo_inst:'pato14@cc.com'}).exec(console.log);

Personaldata.create({edad:23,user:'10370710'}).exec(console.log);
Personaldata.create({edad:23,user:'10370711'}).exec(console.log);
Personaldata.create({edad:23,user:'10370712'}).exec(console.log);
Personaldata.create({edad:23,user:'10370713'}).exec(console.log);

Post.create({post:'holaperrosdelmal1',user:'10370710'}).exec(console.log);
Post.create({post:'holaperrosdelmal2',user:'10370710'}).exec(console.log);
Post.create({post:'holaperrosdelmal3',user:'10370710'}).exec(console.log);
Post.create({post:'holaperrosdelmal4',user:'10370711'}).exec(console.log);
Post.create({post:'holaperrosdelmal5',user:'10370711'}).exec(console.log);
Post.create({post:'holaperrosdelmal6',user:'10370711'}).exec(console.log);
Post.create({post:'holaperrosdelmal7',user:'10370712'}).exec(console.log);
Post.create({post:'holaperrosdelmal8',user:'10370712'}).exec(console.log);

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
