const knex = require('./../models/knex');

class Base {
  constructor(props){
    this.table = props;
  }

  all(){
    return knex(this.table).select();
  }

  insert(params){
    return knex(this.table).insert(params);
  }

  single(id){
    return knex(this.table).where('id','=',id);
  }

  where(id){
    return knex(this.table).where(id);
  }

  delete(id){
    return knex(this.table).where('id','=',id).del();
  }

  update(id,params){
    return knex(this.table).where('id','=',id).update(params);
  }

  select(params){
    return knex(this.table).select().where(params);
  }
}

module.exports = Base