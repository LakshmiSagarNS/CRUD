const {Router} = require('express');
const controller = require('../services/controller');
const router = Router();
router.get("/",controller.getdata)
router.get("/:id",controller.getDataById);
router.post("/",controller.addData);
router.delete("/:id",controller.removeData);
router.patch("/",controller.updateData);
module.exports = router;