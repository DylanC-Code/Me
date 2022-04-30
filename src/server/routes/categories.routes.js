"use-strict";

import Express from "express";
import {
  CreateCategory,
  GetAllCategories,
  GetCategory,
} from "../controllers/categories.controllers.js";

const router = Express.Router();

router.post("/create", CreateCategory);
router.get("/:pk", GetCategory);
router.get("/", GetAllCategories);

export { router as CategoriesRoutes };
