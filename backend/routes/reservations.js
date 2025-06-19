import express from 'express';
import { listarReservas } from '../controllers/reservationController.js';

const router = express.Router();

router.get('/', listarReservas);


export default router;
