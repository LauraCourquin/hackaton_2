const express = require("express");

const {
  ItemController,
  ActorController,
  ProjectController,
  SearchController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/actor", ActorController.browse);
router.get("/actor", ActorController.browse);
router.get("/actor/:id", ActorController.read);

router.get("/project", ProjectController.browse);
router.get("/project/all/", ProjectController.projectAll);
router.get("/project/:id", ProjectController.read);

router.get("/search", SearchController.search);
module.exports = router;
