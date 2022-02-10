import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const routes = Router();

routes.post("/criar", CategoriesController.create);

routes.get("/listar", CategoriesController.list);

routes.get("/:id", CategoriesController.findById);

routes.put("/:id", CategoriesController.update);

routes.delete("/:id", CategoriesController.delete);

export default routes;