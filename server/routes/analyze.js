const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  analyzeEmail,
  analyzeUrl,
  analyzeText,
  analyzeFile,
  checkFact
} = require('../controllers/analyzeController');
const authenticate = require('../middleware/auth');

// Multer config for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  }
});

router.post('/email', authenticate, analyzeEmail);
router.post('/url', authenticate, analyzeUrl);
router.post('/text', authenticate, analyzeText);
router.post('/file', authenticate, upload.single('file'), analyzeFile);
router.post('/factcheck', authenticate, checkFact);

module.exports = router;