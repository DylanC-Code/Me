"use-strict";

import Express from "express";
import * as Controllers from "../controllers/notes.controllers.js";

const router = Express.Router();

router.delete("/delete/:pk", Controllers.DeleteNote);
router.put("/update/", Controllers.UpdateConcept);
router.get("/", Controllers.GetAllCategories);
router.get("/category/:id_category", Controllers.GetLanguagesOfCategory);
router.get("/language/:pk", Controllers.GetConceptsOfLanguage);

export { router as NotesRoutes };
