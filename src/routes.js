const express = require('express');
const router = express.Router();

const ClienteController = require('./controller/clienteController');

router.get('/clientes', ClienteController.findAll);
router.get('/clientes/:id', ClienteController.findById);

module.exports = router;