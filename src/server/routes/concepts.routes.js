"use-strict";

import Express from "express";
import * as Controllers from "../controllers/concepts.controller.js";

const router = Express.Router();

router.post("/create", Controllers.AddConcept);
router.delete("/delete/:pk", Controllers.DeleteConcept);
router.put("/update", Controllers.UpdateConcept);
router.get("/:pk", Controllers.GetAllConcepts);

export { router as ConceptsRoutes };
