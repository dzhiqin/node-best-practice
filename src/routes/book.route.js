import express from 'express'

const router = express.Router()
import {
  getRecordsByPage,
  getRecordById,
  deleteRecord,
  createRecord,
  updateRecord,
} from '../controllers/book.controller'

router.get('/',getRecordsByPage)
router.get('/:id',getRecordById)
router.post('/create',createRecord)
router.post('/delete',deleteRecord)
router.post('/update',updateRecord)
export default router