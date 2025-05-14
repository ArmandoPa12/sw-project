var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = require('../middleware/upload')

const fileController = require('../controller/fileController');

router.post('/audio/', upload.single('audioData'), fileController.createAudio);
router.delete('/audio/:notaId/:audioId', fileController.deleteAudio);

router.post('/imagen/', upload.single('imagenData'), fileController.createImage);
router.delete('/imagen/:notaId/:imagenId', fileController.deleteImagen);


module.exports = router;