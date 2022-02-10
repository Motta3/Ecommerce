import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

routes.post("/criar", ClientsController.create);

routes.get("/listar", ClientsController.list);

routes.get("/:id", ClientsController.findById);

routes.put("/:id", ClientsController.edit);

routes.delete("/:id", ClientsController.delete);

export default routes;