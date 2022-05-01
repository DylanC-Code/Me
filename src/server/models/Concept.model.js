"use-strict";

import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Concept = sequelize.define(
  "Concept",
  {
    id_concept: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    value: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  },
  { timestamps: false }
);

export default Concept;
