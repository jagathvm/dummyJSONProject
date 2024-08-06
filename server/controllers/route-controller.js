import { httpRequest } from '../helpers/http-request.js';
import { capitalisation } from '../helpers/capitalisation.js';

/**
 * Render the home page.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getHome = async (req, res) => {
  res.status(200).render('home', { breadcrumb: 'Home' });
};

/**
 * Fetch all users and render the userCards view.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getAllUsers = async (req, res) => {
  try {
    const result = await httpRequest('users');
    const users = result.users; // No need to await here since `result.users` is not a promise
    res
      .status(200)
      .render('user/userCards', { users, breadcrumb: 'Users', capitalisation });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
    console.error(`Error fetching users: ${error.message}`);
  }
};

/**
 * Fetch a single user by ID and render the userCard view.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await httpRequest(`users/${id}`);
    res.status(200).render('user/userCard', {
      user,
      breadcrumb: `User > ${user.firstName} ${user.lastName}`,
      capitalisation,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
    console.error(`Error fetching user: ${error.message}`);
  }
};
