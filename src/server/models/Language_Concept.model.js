"use-script";

import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Concept from "./Concept.model.js";
import Language from "./Language.model.js";

const Language_Concept = sequelize.define(
  "Language_Concept",
  {
    id_language: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Language, key: "id_language" },
    },
    id_concept: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Concept, key: "id_concept" },
    },
  },
  { timestamps: false, freezeTableName: true }
);

export default Language_Concept;
