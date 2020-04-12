const articleModels = require('./../models/articleModels');
const sortModels = require('./../models/sortModels');
const {formatTime} = require('./../utile/date');

const articleController = {
  show: async function(req,res,next){
    try{
      let article = await articleModels.all()
      .leftJoin('sort','article.sort_id','sort.id')
      .column('article.id','article.title','sort.name','article.created_time','article.content')     
      article.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      res.locals.article = article;
      res.render('admin/article',res.locals)
    }catch(e){
      res.render('error',res.locals);
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let article = await articleModels.single(id);
      article.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      
      let sort = await sortModels.all()
      res.locals.article = article[0];
      res.locals.sort = sort;
      res.render('admin/articleEdit',res.locals)
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  insert: async function(req,res,next){
    let title = req.body.title;
    let sort_id = req.body.sort_id;
    let content = req.body.content;
    let created_time = new Date()
    if(!title || !sort_id || !content){
      res.json({code: 0,data:'参数错误'})
      return
    }
    try{
      const article = await articleModels.insert({title,sort_id,content,created_time})
      res.json({code:200,data:article})
    }catch(e){
      res.render('error',res.locals);
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    console.log(id)
    if(!id){
      res.json({code:0,data:'参数错误'})
      return
    }
    try{
      const article = await articleModels.delete(id);
      res.json({code:200,data:article})
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  edit: async function(req,res,next){
    let id = req.params.id;
    let title = req.body.title;
    let sort_id = req.body.sort_id;
    console.log(id,title,sort_id)
    let content = req.body.content;
    if(!id || !title || !sort_id || !content){
      res.json({code: 0,data:'参数错误'})
      return
    }
    try{
      const article = await articleModels.update(id,{title,sort_id,content});
      res.json({code: 200,data:article})
    }catch(e){
      console.log(e)
    }
  },
  create: async function(req,res,next){
    let sort = await sortModels.all();
    res.locals.sortName = sort; 
    res.render('admin/articleCreate',res.locals)
  }
}

module.exports = articleController