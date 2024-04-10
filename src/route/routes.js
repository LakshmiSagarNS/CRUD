const {Router} = require('express');
const controller = require('../services/controller');
const router = Router();
router.get("/get",controller.getdata)
router.get("/getById:id",controller.getDataById);
router.post("/post",controller.addData);
router.delete("/deleteById:id",controller.removeData);
router.put("/update",controller.updateData);
module.exports = router;
