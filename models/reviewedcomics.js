'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class reviewedComics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reviewedComics.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  }
  reviewedComics.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      review: DataTypes.TEXT,
      description: DataTypes.TEXT,
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
      modelName: 'reviewedComics',
      tableName: 'reviewedcomics'
    }
  )
  return reviewedComics
}
