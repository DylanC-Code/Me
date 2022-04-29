"use-strict";

import Express from "express";
import dotenv from "dotenv";
import { ProjectsRoutes } from "./routes/projects.routes.js";
import sequelize from "./database/database.js";
dotenv.config({ path: "src/server/configs/.env" });

const app = Express();

app.use("/api/projects", ProjectsRoutes);

app.listen(
  process.env.PORT,
  console.log(`Server listen on port : ${process.env.PORT}`)
);
