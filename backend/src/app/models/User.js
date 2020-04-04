const { Sequelize, Model } = require('sequelize')

class Users extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
    }, { sequelize });
  }
}

module.exports= Users;
