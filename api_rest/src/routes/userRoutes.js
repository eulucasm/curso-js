import {
  Router
} from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> lista todos os usuarios ->
store/create -> cria um novo usuario -> post
delete -> apaga um usuario -> delete
show -> mostra um usuario -> get
update -> atualiza um usuario -> patch ou put
*/
