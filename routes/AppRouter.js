const Router = require("express").Router()
const ArtistRouter = require("./ArtistRouter")
// const AlbumsRouter = require("./AlbumsRouter")
// const SongsRouter = require("./SongsRouter")

Router.use("/artist", ArtistRouter)
// Router.use("/albums", AlbumsRouter)
// Router.use("/songs", SongsRouter)
module.exports = Router
