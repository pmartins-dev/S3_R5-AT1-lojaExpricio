const express = require("express");
const router =express.Router();
const {clienteController}= require("../controllers/clienteControllers");
const { verify } = require("../middlewares/authMiddlewares");
const {authController } = require ("../controllers/authController");

router.post("/clientes/login", authController.clienteLogin);

// GET /clientes -> Listar todos os clientes.
router.get('/clientes', verify.cliente, clienteController.listarClientes);

// POST /cliente -> Criar um novo cliente.
router.post('/clientes', clienteController.criarCliente);

module.exports={clienteRoutes: router};
