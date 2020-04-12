const Base = require('./base');

class UserModels extends Base {
  constructor(props = 'user'){
    super(props)
  }
}

module.exports = new UserModels()