'use strict';
const {Category,Author,Book} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Authors',[
    {name: "Henry Hazlitt",createdAt: new Date(),updatedAt: new Date()},
    {name:"Charles Wheelan",createdAt: new Date(),updatedAt: new Date()},
    {name: "Gregg Olsen",createdAt: new Date(),updatedAt: new Date()}
   ])
   await queryInterface.bulkInsert('Categories',[
    {name: "social",createdAt: new Date(),updatedAt: new Date()},
    {name: "economics",createdAt: new Date(),updatedAt: new Date()},
    {name: "science",createdAt: new Date(),updatedAt: new Date()},
    {name: "memoirs",createdAt: new Date(),updatedAt: new Date()},
    {name: "literature",createdAt: new Date(),updatedAt: new Date()}
   ])
   await queryInterface.bulkInsert('Books',[
    {name: "Cruel deception",createdAt: new Date(),updatedAt: new Date()},
    {name: "Liying next to me",createdAt: new Date(),updatedAt: new Date()},
    {name:"Economics in one lesson",createdAt: new Date(),updatedAt: new Date()},
    {name: "Thinking as a science",createdAt: new Date(),updatedAt: new Date()},
    {name:"The wisdom of Henry Hazlitt",createdAt: new Date(),updatedAt: new Date()},
    {name: "Nacked ecnomics",createdAt: new Date(),updatedAt: new Date()},
    {name: "Nacked statistics",createdAt: new Date(),updatedAt: new Date()},
    {name: "We come, we saw, we left",createdAt: new Date(),updatedAt: new Date()}
   ])
   await queryInterface.bulkInsert('Categories',[
    {name: "economics",createdAt: new Date(),updatedAt: new Date()},
   ])
    const economics = await Category.findOne({where: {name: "economics"}})
    const science = await Category.findOne({where: {name: "science"}})
    const memoirs = await Category.findOne({where: {name: "memoirs"}})
    const literature = await Category.findOne({where: {name: "literature"}})

    const HH = await Author.findOne({where: {name: "Henry Hazlitt"}})
    const CW = await Author.findOne({where: {name: "Charles Wheelan"}})
    const GO = await Author.findOne({where: {name: "Gregg Olsen"}})
   
    await Book.findOne({where: {name: "If you tell"}}).then(async (book) => {
      await book.setAuthor(GO)
      await book.setCategory(literature)
    })
    await Book.findOne({where: {name: "Liying next to me"}}).then(async(book) => {
      await book.setAuthor(GO)
      await book.setCategory(literature)
    })
    await Book.findOne({where: {name: 'Cruel deception'}}).then(async(book) => {
      await book.setAuthor(GO)
      await book.setCategory(literature)
    })
    await Book.findOne({where: {name: 'Economics in one lesson'}}).then(async(book) => {
      await book.setAuthor(HH)
      await book.setCategory(economics)
    })
    await Book.findOne({where: {name: 'Thinking as a science'}}).then(async(book) => {
      await book.setAuthor(HH)
      await book.setCategory(science)
    })
    await Book.findOne({where: {name: 'The wisdom of Henry Hazlitt'}}).then(async(book) => {
      await book.setAuthor(HH)
      await book.setCategory(memoirs)
    })
    await Book.findOne({where: {name: 'Nacked ecnomics'}}).then(async(book) => {
      await book.setAuthor(CW)
      await book.setCategory(economics)
    })
    await Book.findOne({where: {name: 'Nacked statistics'}}).then(async(book) => {
      await book.setAuthor(CW)
      await book.setCategory(science)
    })
    await Book.findOne({where: {name: 'We come, we saw, we left'}}).then(async(book) => {
      await book.setAuthor(CW)
      await book.setCategory(literature)
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories',null,{})
    await queryInterface.bulkDelete('Authors',null,{})
    await queryInterface.bulkDelete('Books',null,{})
  }
};
