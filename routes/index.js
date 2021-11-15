const express = require('express');
const router = express.Router();
router.get('/',
 function(request, response) {
        response.json("Terve taas");
      }
    );
 



module.exports = router;
