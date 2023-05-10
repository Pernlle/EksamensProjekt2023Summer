import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/usersController';
import { isAuthenticated, isOwner } from '../middleware';

// Det er vigtigt at isAuthenticated er først, da isOwner bruger identity fra isAuthhenticated
export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};