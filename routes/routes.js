const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const UserController = require('../controllers/UserController');
const MaterialController = require('../controllers/MaterialController');
const CompraController = require('../controllers/CompraController');
const VendaController = require('../controllers/VendaController');

//pagina inicial
router.get('/', HomeController.index);

//usuario
router.get('/cadastroUsuario', UserController.register);
router.post('/login', UserController.login);

//materiais
router.get('/materiais', MaterialController.renderIndex);
router.get('/materiais/editar/:id', MaterialController.renderEdit);
router.post('/materiais/cadastro', MaterialController.new);
router.post('/materiais/editar', MaterialController.update);
router.post('/materiais/excluir', MaterialController.delete);

//compras
router.get('/compras', CompraController.index);
router.get('/compra/materiais/:id', CompraController.viewDetails);
router.get('/compra/editar/:id', CompraController.renderEdit);
router.get('/compra/cadastro', CompraController.renderCompra);
router.post('/compra/cadastro', CompraController.novaCompra);
router.post('/compra/excluir', CompraController.delete);
router.post('/compra/editar', CompraController.update);

//vendas
router.get('/vendas', VendaController.index);
router.get('/venda/materiais/:id', VendaController.viewDetails);
router.get('/venda/cadastro', VendaController.renderVenda);
router.post('/venda/cadastro', VendaController.novaVenda);

module.exports = router;