const express = require('express');
const router = express.Router();

const CrudController = require('./controllers/CrudController');

router.get('/usuarios', CrudController.buscar);
router.get('/usuario/:id', CrudController.unico);
router.post('/usuario', CrudController.inserir);
router.put('/usuario/:id', CrudController.editar);
router.delete('/usuario/:id', CrudController.excluir);

module.exports = router;