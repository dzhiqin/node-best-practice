import {Book} from '../models'

export const getRecordsByPage = (req,res) => {
  const { page,pageSize } = req.query
  Book.findAll({
    attributes: ['id','name','author'],
    limit: pageSize,
    offset: (page-1) * pageSize,
    order: [['id','DESC']]
  }).then(books => {
    return res.status(200).json({books})
  }).catch(err => {
    return res.status(400).json({err})
  })
}
export const getRecordById = (req,res) => {
  const id = req.params.id
  Book.findByPk(id).then(book => {
    return res.status(200).json({book})
  }).catch(err => {
    return res.status(400).json({err})
  })
}
export const deleteRecordById = (req,res) => {
  const {id} = req.body
  Book.destroy({
    where: {id: id}
  }).then(() => {
    return res.status(200).json({
      message: "success"
    })
  }).catch(err => {
    return res.status(400).json({err})
  })
}
export const addRecord = (req,res) => {
  let { name, author } = req.body
  Book.create({
    name, author
  }).then(book => {
    return res.status(200).json({
      message: "success",
      book
    })
  }).catch(err => {
    return res.status(400).json({err})
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
        return res.status(202).json({
          message:"success",
          book: newBook
        })
      })
    }else{
      return res.status(206).json({
        message: "record not found"
      })
    }
  }).catch(err => {
    return res.status(400).json({err})
  })
}