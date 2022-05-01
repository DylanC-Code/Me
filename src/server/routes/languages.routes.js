"use-strict";

import Express from "express";
import * as Controllers from "../controllers/languages.controllers.js";

const router = Express.Router();

router.post("/create", Controllers.AddLanguage);
router.delete("/delete/:pk", Controllers.DeleteLanguage);
router.put("/update", Controllers.UpdateLanguage);
router.get("/:pk", Controllers.GetAllLanguages);

export { router as LanguagesRoutes };
