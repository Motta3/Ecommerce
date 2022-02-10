import { Router } from "express";
import OrdersController from "../controllers/OrderController";

const routes = Router();

routes.post("/criar", OrdersController.create);

routes.get("/listar", OrdersController.list);

routes.get("/:id", OrdersController.findById);

routes.get("/cliente/:id", OrdersController.findByClientId);

routes.put("/:id", OrdersController.update);

export default routes;