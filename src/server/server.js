"use-strict";

import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";

dotenv.config({ path: "src/server/configs/.env" });
const app = Express();

//# Middlewares
import UpdateOrAddDates from "./middlewares/Notes.middlewares.js";

app.use(cors());
app.use(Express.json());
app.use(UpdateOrAddDates);

//^ Routes
import { ProjectsRoutes } from "./routes/projects.routes.js";
import { CategoriesRoutes } from "./routes/categories.routes.js";
import { LanguagesRoutes } from "./routes/languages.routes.js";
import { ConceptsRoutes } from "./routes/concepts.routes.js";
import { NotesRoutes } from "./routes/notes.routes.js";
import { UserRoutes } from "./routes/users.routes.js";

app.use("/api/projects", ProjectsRoutes);
app.use("/api/categories", CategoriesRoutes);
app.use("/api/languages", LanguagesRoutes);
app.use("/api/concepts", ConceptsRoutes);
app.use("/api/notes", NotesRoutes);
app.use("/api/users", UserRoutes);

app.listen(
  process.env.PORT,
  console.log(`Server listen on port : ${process.env.PORT}`)
);
