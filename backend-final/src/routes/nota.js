var express = require('express');
var router = express.Router();


const notaController = require('../controller/NotaController');

router.get('/:id', notaController.getAllNotas);
router.get('/get/:id', notaController.getNota);
router.post('/', notaController.createNota);
router.put('/:id', notaController.updateNota);
router.delete('/:id', notaController.deleteNota);

module.exports = router;