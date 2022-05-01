"use-strict";

import Express from "express";
import * as Controllers from "../controllers/categories.controllers.js";

const router = Express.Router();

router.post("/create", Controllers.CreateCategory);
router.delete("/delete/:pk", Controllers.DeleteCategory);
router.put("/update",Controllers.UpdateCategory)
router.get("/", Controllers.GetAllCategories);

export { router as CategoriesRoutes };
