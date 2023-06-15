
import { Router } from "express";
import auth from "../middlewares/auth.js";
import authorization from "../middlewares/authorization.js";
import {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../controllers/roleController.js";

const roleRouter = Router();

roleRouter.get("/", auth, authorization("getRoles"), getRoles);
roleRouter.get("/:id", auth, authorization("getRole"), getRoleById);
roleRouter.post("/", auth, authorization("creteRole"), createRole);
roleRouter.put("/:id", auth, authorization("updateRole"), updateRole);
roleRouter.delete(
  "/:id",
  auth,
  authorization("deleteRole"),
  deleteRole
);

export default roleRouter;
