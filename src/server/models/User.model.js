"use-strict";

import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import bcript from "bcrypt";

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
  {
    timestamps: false,
    hooks: {
      beforeCreate: (user) => {
        const salt = bcript.genSaltSync();
        user.password = bcript.hashSync(user.password, salt);
      },
    },
  }
);

export default User;
