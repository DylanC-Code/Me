"use-strict";

import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const User = sequelize.define(
  "User",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(100), allowNull: false },
  },
  { timestamps: false }
);

export default User;
