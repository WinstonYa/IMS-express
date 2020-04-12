const userModels = require('./../models/userModels');

const userController = {
  show: async function(req,res,next){
    try{
      let users = await userModels.all();
      res.locals.user = users;
      res.render('admin/user',res.locals);
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals)
    }
  },
  single: async function(req,res,next){
    try{
      let id = req.params.id;
      let users = await userModels.single(id);
      res.locals.user = users[0];
      res.render('admin/userEdit',res.locals)
    }catch(err){
      console.log(err)
      res.json({code:0,data:e})
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    if(!name || !phone || !password){
      res.json({code:0,data:'参数错误'})
    }
    try{
      const user = await userModels.insert({name,phone,password});
      res.json({code:200,data:user})
    }catch(e){
      console.log()
      res.json({code: 0,data: e})
    }
  },
  edit: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    let phone =req.body.phone;
    let password =req.body.password;

    if( !name || !phone || !password){
      res.json({ code:0,data:'缺少参数'})
      return
    }
    try{
      const user = await userModels.update(id,{name,phone,password})
      res.json({code:200,data:user})
    }catch(e){
      console.log(e)
      res.json({ code:0, data: e})
    }
  },
  delete: async function(req,res,next){
    let id = req.body.id;
    if(!id){
      res.json({code:0,data:'参数错误'})
      return
    }
    try{
      const user = await userModels.delete(id)
      res.json({code:200,data:user})
    }catch(e){
      console.log(e);
      res.json({code:0,data: e})
    }
  },
  create: async function(req,res,next){
    res.render('admin/userCreate')
  }
}

module.exports = userController