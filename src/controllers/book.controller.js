import {Book} from '../models'
import { Result } from '../libs/result'
import { getDateTime } from '../libs/tools'

export const getRecordsByPage = (req,res) => {
  const { page,pageSize } = req.query
  Book.findAndCountAll({
    attributes: ['id','name','author'],
    limit: pageSize,
    offset: (page-1) * pageSize,
    order: [['id','DESC']]
  }).then(books => {
    return res.json(Result.success(books))
  }).catch(err => {
    return res.status(500).json(Result.failed(err))
  })
}
export const getRecordById = (req,res) => {
  const id = req.params.id
  Book.findByPk(id).then(async(book) => {
    const author = await book.getAuthor()
    const category = await book.getCategory()
    console.log(book)
    const data = {
      ...book.dataValues,
      createdAt: getDateTime(book.dataValues.createdAt),
      updatedAt: getDateTime(book.dataValues.updatedAt),
      authorName:author.name,
      categoryName:category.name
    }
    return res.json(Result.success(data))
  }).catch(err => {
    return res.status(500).json(Result.failed(err))
  })
}
export const deleteRecord = (req,res) => {
  const {id} = req.body
  Book.destroy({
    where: {id: id}
  }).then(() => {
    return res.json(Result.success(null))
  }).catch(err => {
    return res.status(500).json(Result.failed(err))
  })
}
export const createRecord = (req,res) => {
  let { name, author } = req.body
  Book.create({
    name, author
  }).then(book => {
    return res.json(Result.success(book))
  }).catch(err => {
    return res.status(500).json(Result.failed(err))
  })
}
export const updateRecord = (req,res) => {
  let {id,name,author} = req.body
  Book.findOne({
    where:{id: id}
  }).then(book => {
    if(book){
      book.update({
        name,author
      }).then(newBook =>{
        return res.json(Result.success(newBook))
      })
    }else{
      return res.json(Result.recordNotFound({id}))
    }
  }).catch(err => {
    return res.status(500).json(Result.failed(err))
  })
}