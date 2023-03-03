import { Author } from '../models'
import { Result } from '../libs/result'

export const createRecord = (req,res) => {
	const { name } = req.body
	Author.create({
		name
	}).then(author => {
		return res.json(Result.success(author))
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
	})
}