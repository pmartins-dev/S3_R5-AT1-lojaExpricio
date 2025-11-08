const express = require("express");
const router =express.Router();
const {clienteController}= require("../controllers/clienteControllers");
const {authController} = require('../controllers/authController');
const {verify} = require('../middlewares/authMiddlewares');

// POST/clientes -> Para o cliente fazer login
router.post('/clientes/login', authController.clienteLogin);

// GET /clientes -> Listar todos os clientes.
router.get('/clientes',verify.cliente, clienteController.listarClientes);

// POST /cliente -> Criar um novo cliente.
router.post('/clientes', clienteController.criarCliente);

module.exports={clienteRoutes: router};
 