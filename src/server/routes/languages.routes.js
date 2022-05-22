"use-strict";

import Express from "express";
import * as Controllers from "../controllers/languages.controllers.js";
import { upload } from "../middlewares/Image.middlewares.js";

const router = Express.Router();

router.post("/create", upload, Controllers.AddLanguage);
router.delete("/delete/:pk", Controllers.DeleteLanguage);
router.put("/update", upload, Controllers.UpdateLanguage);
router.get("/:pk", Controllers.GetAllLanguagesByCategory);
router.get("/", Controllers.GetAllLanguages);

export { router as LanguagesRoutes };
