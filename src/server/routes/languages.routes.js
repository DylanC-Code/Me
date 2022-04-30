"use-strict";

import Express from "express";

const router = Express.Router();

router.get("/:pk");
router.get("/concepts/:pk");

export { router as LanguagesRoutes };
