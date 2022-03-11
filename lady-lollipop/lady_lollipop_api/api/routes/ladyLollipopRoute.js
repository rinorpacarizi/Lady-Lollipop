import express from 'express';
import ladyLollipopController from '../controllers/ladyLollipopController';
import checkIfAuthenticated from '../middlewares/checkIfAuthenticated';

const ladyLollipopRoute=express.Router();
ladyLollipopRoute.use(checkIfAuthenticated);

ladyLollipopRoute.get('/list', ladyLollipopController.list);

export default ladyLollipopRoute;