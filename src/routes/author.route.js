import express from 'express'
const router = express.Router()
import {
	createRecord
} from '../controllers/author.controller'

router.post('/create',createRecord)
export default router