'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class myComics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      myComics.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  }
  myComics.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          id: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'myComics',
      tableName: 'mycomics'
    }
  )
  return myComics
}
