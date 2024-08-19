import { Router } from "express";
import { sanitizeClienteInput, findAll, findOne, add, update, remove } from "./cliente.controller.js";
export const clienteRouter = Router();
clienteRouter.get('/', findAll);
clienteRouter.get('/:id', findOne);
clienteRouter.post('/', sanitizeClienteInput, add);
clienteRouter.put('/:id', sanitizeClienteInput, update);
clienteRouter.patch('/:id', sanitizeClienteInput, update);
clienteRouter.delete('/:id', sanitizeClienteInput, remove);
//# sourceMappingURL=cliente.routes.js.map