import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

// The model of the categories table
const Category = sequelize.define(
  "Category",
  {
    id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
  },
  { timestamps: false }
);

export default Category;
