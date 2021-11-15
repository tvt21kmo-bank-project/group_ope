const express = require('express');
const router = express.Router();
router.get('/',
 function(request, response) {
        response.json("Terve taas kerran");
      }
    );
 



module.exports = router;
