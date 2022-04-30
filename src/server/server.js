"use-strict";

import Express from "express";
import dotenv from "dotenv";
import sequelize from "./database/database.js";

dotenv.config({ path: "src/server/configs/.env" });
const app = Express();

//# Middlewares
app.use(Express.json());

//^ Routes
import { ProjectsRoutes } from "./routes/projects.routes.js";
import { CategoriesRoutes } from "./routes/categories.routes.js";

app.use("/api/projects", ProjectsRoutes);
app.use("/api/categories", CategoriesRoutes);

app.listen(
  process.env.PORT,
  console.log(`Server listen on port : ${process.env.PORT}`)
);
