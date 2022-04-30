import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Language = sequelize.define(
  "Language",
  {
    id_language: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    id_category: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: Category, key: "id_category" },
    },
  },
  { timestamps: false }
);

export default Language;
