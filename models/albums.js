"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Albums.belongsTo(models.Artist, {
        foreignKey: "artist_id",
        as: "artist",
        onDelete: "cascade",
        onUpdate: "cascade",
      })
      Albums.hasMany(models.Songs, {
        foreignKey: "song_id",
        as: "song",
        onDelete: "cascade",
        onUpdate: "cascade",
      })
    }
  }

  Albums.init(
    {
      name: DataTypes.STRING,
      artistName: DataTypes.STRING,
      description: DataTypes.STRING,
      releaseDate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Albums",
      tableName: "albums",
    }
  )
  return Albums
}
