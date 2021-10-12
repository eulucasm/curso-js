import {
  Router
} from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', userController.index); // lista usuarios
router.get('/:id', userController.show); // lista um usuario por id

// Existe em um sistema real
router.post('/', loginRequired, userController.store); // Criação de usuario
router.put('/', loginRequired, userController.update); // Atualiza usuario
router.delete('/', loginRequired, userController.delete); // Deleta usuario

export default router;

/*
index -> lista todos os usuarios ->
store/create -> cria um novo usuario -> post
delete -> apaga um usuario -> delete
show -> mostra um usuario -> get
update -> atualiza um usuario -> patch ou put
*/
