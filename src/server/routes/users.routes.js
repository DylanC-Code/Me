"use-strict";

import Express from "express";
import * as Controllers from "../controllers/users.controllers.js";

const router = Express.Router();

router.post("/create", Controllers.CreateUser);
router.delete("/delete/:pk", Controllers.DeleteUser);
router.put("/update", Controllers.UpdateUser);

export { router as UserRoutes };
