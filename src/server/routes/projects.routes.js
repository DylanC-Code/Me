"use-strict";

import Express from "express";
import * as Controllers from "../controllers/projects.controllers.js";
import { upload } from "../middlewares/Image.middlewares.js";

const router = Express.Router();

router.post("/create", upload, Controllers.AddProject);
router.delete("/delete/:pk", Controllers.DeleteProject);
router.put("/update", upload, Controllers.UpdateProject);
router.get("/:pk", Controllers.GetProject);
router.get("/", Controllers.GetAllProject);

export { router as ProjectsRoutes };
