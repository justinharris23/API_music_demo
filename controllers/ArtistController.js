const { Artist, Albums, Songs } = require("../models")
// const { Op, literal, fn, col } = require("sequelize")

//CRUD
//CREATE
const CreateArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    let artistBody = { ownerId, ...req.body }
    let artist = await Artist.create(artistBody)
    res.send(artist)
  } catch (error) {
    throw error
  }
}

//FIND (READ)
const FindAllArtists = async (req, res) => {
  try {
    const result = await Artist.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

//UPDATE
const UpdateArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    let updatedArtist = await Artist.update(req.body, {
      where: { id: ArtistId },
      returning: true,
    })
    res.send(updatedArtist)
  } catch (error) {
    throw error
  }
}

//DELETE
const DeleteArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    await Artist.destroy({ where: { id: artistId } })
    res.send({ message: `Deleted artist with an id of ${artistId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateArtist,
  FindAllArtists,
  UpdateArtist,
  DeleteArtist,
}
