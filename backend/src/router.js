const express = require("express");

const {
  ItemController,
  ActorController,
  ProjectController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/actor", ActorController.browse);
router.get("/actor/:id", ActorController.read);

router.get("/project", ProjectController.browse);
router.get("/project/:id", ProjectController.read);

module.exports = router;
