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



RubricaPost.create({excelente:1,idpost:1}).exec(console.log);
RubricaPost.create({bueno:1,idpost:2}).exec(console.log);
RubricaPost.create({bueno:1,idpost:3}).exec(console.log);
RubricaPost.create({malo:1,idpost:4}).exec(console.log);
RubricaPost.create({malo:1,idpost:5}).exec(console.log);
RubricaPost.create({malo:1,idpost:6}).exec(console.log);
RubricaPost.create({excelente:1,idpost:7}).exec(console.log);
RubricaPost.create({excelente:1,idpost:8}).exec(console.log);


Comentario.create({comentario:'estas bien buena',idpost:'1'}).exec(console.log);
Comentario.create({comentario:'estas bien puto ',idpost:'1'}).exec(console.log);
Comentario.create({comentario:'estas bien puto tu puto de madre comentario',idpost:'1'}).exec(console.log);
Comentario.create({comentario:'estas bien puto tu puto de madre comentario',idpost:'1'}).exec(console.log);
Comentario.create({comentario:'estas bien put',idpost:'1'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerwerweewrwer',idpost:'2'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerwerwwere',idpost:'2'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerwerghjghjwe',idpost:'2'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerwwqr4rerwe',idpost:'3'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerghjhgjwerwe',idpost:'3'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerwerwe',idpost:'2'}).exec(console.log);
Comentario.create({comentario:'estas biewrjwerwejrhwerwerweo',idpost:'3'}).exec(console.log);
Comentario.create({comentario:'estas bieewrjwerwejrhwerwfghgferwe',idpost:'4'}).exec(console.log);

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
