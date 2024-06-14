const express = require('express');
const router = express.Router();

const mescRoutes = require('./mescs.routes');
const userRoutes = require('./user.routes');
const paroquiaRoutes = require('./paroquia.routes');
const capelaRoutes = require('./capela.routes');

router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/mesc',mescRoutes);
router.use('/user', userRoutes); 
router.use('/paroquia', paroquiaRoutes);
router.use('/capela', capelaRoutes);

module.exports = router;