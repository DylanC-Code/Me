"use-strict";

import Express from "express";
const router = Express.Router();

router.use("/", (req, res) => console.log("salut"));

export { router as ProjectsRoutes };
