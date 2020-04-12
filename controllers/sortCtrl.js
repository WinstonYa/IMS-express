const sortModels = require('./../models/sortModels');

const sortController = {
  show: async function(req,res,next){
    try{
      let sorts = await sortModels.all();
      res.locals.sort = sorts;
      res.render('admin/sort',res.locals)
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  single: async function(req,res,next){
    try{
      let id = req.params.id;
      let sorts = await sortModels.single(id);
      res.locals.sort = sorts[0];
      res.render('admin/sortEdit',res.locals)
    }catch(err){
      console.log(err)
      res.json({code:0,data:e})
    }
  },
  edit: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    console.log(id,name,13)
    if(!id || !name){
      res.json({code:0,data:"参数错误"})
      return
    }
    try{
      const sort = await sortModels.update(id,{name})
      res.json({code:200,data:sort})
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  delete: async function(req,res,next){
    let id = req.body.id;
    if(!id){
      res.json({code:0,data:'参数错误'})
      return
    }
    try{
      const sort = await sortModels.delete(id);
      res.json({code:200,data:sort})
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    if(!name){
      res.json({code: 0,data: "参数错误"})
      return
    }
    try{
      const sort = await sortModels.insert({name});
      res.json({code:200,data:sort})
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  create: async function(req,res,next){
    res.render('admin/sortCreate')
  }
}

module.exports = sortController