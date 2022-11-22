"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Songs.belongsTo(models.Artist, {
        foreignKey: "artist_id",
        as: "artist",
        onDelete: "cascade",
        onUpdate: "cascade",
      })
      Songs.belongsTo(models.Albums, {
        foreignKey: "album_id",
        as: "album",
        onDelete: "cascade",
        onUpdate: "cascade",
      })
    }
  }
  Songs.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      artistName: DataTypes.STRING,
      albumName: DataTypes.STRING,
      lyrics: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Songs",
      tableName: "songs",
    }
  )
  return Songs
}
