"use strict"
const falso = require("@ngneat/falso")
const artists = [...Array(100)].map(() => ({
  name: `${falso.randFirstName()} ${falso.randLastName()}`,
  description: falso.randFirstName(),
  genre: falso.randLastName(),
  yearFormed: falso.randNumber({ min: 1800, max: 2022 }),
  numberOfAlbums: falso.randNumber({ min: 0, max: 100 }),
  createdAt: new Date(),
  updatedAt: new Date(),
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("artists", artists)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artists")
  },
}
