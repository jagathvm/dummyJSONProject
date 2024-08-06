import { Router } from 'express';
import {
  getAllUsers,
  getHome,
  getOneUser,
} from '../controllers/route-controller.js';

const router = Router();

/**
 * Route serving the home page.
 * @name get/home
 * @function
 * @memberof module:routers/user-route
 * @inner
 * @param {string} path - Express path.
 * @param {function} middleware - Express middleware.
 */
router.get('/home', getHome);

/**
 * Route serving the list of all users.
 * @name get/users
 * @function
 * @memberof module:routers/user-route
 * @inner
 * @param {string} path - Express path.
 * @param {function} middleware - Express middleware.
 */
router.get('/users', getAllUsers);

/**
 * Route serving a single user by ID.
 * @name get/users/:id
 * @function
 * @memberof module:routers/user-route
 * @inner
 * @param {string} path - Express path.
 * @param {function} middleware - Express middleware.
 */
router.get('/users/:id', getOneUser);

export default router;
