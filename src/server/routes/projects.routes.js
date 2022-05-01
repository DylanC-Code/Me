"use-strict";

import Express from "express";
import * as Controllers from "../controllers/projects.controllers.js";

const router = Express.Router();

router.post("/create", Controllers.AddProject);
router.delete("/delete/:pk", Controllers.DeleteProject);
router.put("/update", Controllers.UpdateProject);
router.get("/:pk", Controllers.GetProject);

export { router as ProjectsRoutes };
