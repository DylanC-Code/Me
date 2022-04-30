import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

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
