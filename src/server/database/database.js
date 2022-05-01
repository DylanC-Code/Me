import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "portfolio",
  dialect: "sqlite",
  logging: false,
  storage: "./src/server/database/portfolio.sqlite",
});

sequelize.authenticate();
sequelize.sync({ force: true });

export default sequelize;
