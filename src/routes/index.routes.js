const express = require('express');
const router = express.Router();

const mescRoutes = require('./mescs.routes');
const userRoutes = require('./user.routes');

router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/mesc',mescRoutes);
router.use('/user', userRoutes); 

module.exports = router;