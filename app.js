import express from 'express';
import ejsLayout from 'express-ejs-layouts';
import 'dotenv/config';
import router from './server/routes/user-route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

/**
 * Set the view engine to EJS.
 */
app.set('view engine', 'ejs');

/**
 * Use EJS layouts.
 */
app.use(ejsLayout);
app.set('layout', './layout/layout');

/**
 * Middleware to parse JSON and urlencoded data.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Use the router for handling routes.
 */
app.use('/', router);

/**
 * Start the server.
 */
app.listen(PORT, () => {
  console.log(`Server up at http://localhost:${PORT}`);
});
