import express from 'express';
import { listarReservas, reservarMesa, cancelarReserva } from '../controllers/reservationController.js';

const router = express.Router();

router.get('/', listarReservas)
router.post('/', reservarMesa)
router.delete('/:id', cancelarReserva)


export default router;
