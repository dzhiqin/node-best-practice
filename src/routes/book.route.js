import express from 'express'

const router = express.Router()
import {
  getRecordsByPage,
  getRecordById,
  deleteRecordById,
  addRecord,
  updateRecord
} from '../controllers/book.controller'

router.get('/',getRecordsByPage)
router.get('/:id',getRecordById)
router.post('/create',addRecord)
router.post('/delete',deleteRecordById)
router.post('/update',updateRecord)
export default router