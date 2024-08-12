import { Router } from 'express'
import {findAll, findOne, add, update, remove } from './tipoPlato.controler.js'

export const tipoPlatoRouter = Router()

tipoPlatoRouter.get('/', findAll)
tipoPlatoRouter.get('/:numPlato', findOne)
tipoPlatoRouter.post('/', add)
tipoPlatoRouter.put('/:numPlato', update)
tipoPlatoRouter.patch('/:numPlato', update)
tipoPlatoRouter.delete('/:numPlato', remove)