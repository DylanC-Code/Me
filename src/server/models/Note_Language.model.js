"use-strict";

import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Note from "../models/Note.model.js";
import Language from "../models/Language.model.js";

const Note_Language = sequelize.define(
  "Note_Language",
  {
    id_note: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Note, key: "id_note" },
    },
    id_language: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Language, key: "id_language" },
    },
  },
  { timestamps: false }
);

export default Note_Language;
