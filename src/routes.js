import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post(
  '/users',
  multer(multerConfig).single('file'),
  UserController.store
);
routes.get('/users', UserController.index);

routes.delete('/users/:id', UserController.delete);

export default routes;
