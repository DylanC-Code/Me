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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: { min: 0, max: 5 },
    },
  },
  { timestamps: false }
);

export default Concept;
