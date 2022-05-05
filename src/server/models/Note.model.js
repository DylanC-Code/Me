import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Language from "./Language.model.js";

const Note = sequelize.define(
  "Note",
  {
    id_note: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: { min: 0, max: 100 },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date().toISOString().split("T")[0],
    },
    id_language: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Language, key: "id_language" },
    },
  },
  { timestamps: false }
);

export default Note;
