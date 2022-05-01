import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Language from "./Language.model.js";

const Note = sequelize.define("Note", {
  id_note: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  percentage: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});


export default Note;
