"use-strict";

import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Project = sequelize.define(
  "Project",
  {
    id_project: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      unique: true,
    },
    text: { type: DataTypes.TEXT() },
    image: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    github: DataTypes.STRING,
  },
  { timestamps: false }
);

export default Project;
