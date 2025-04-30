import Serve from "./model/serve";
import sequelize from "./db/app";

const server = new Serve();

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync({ force: false });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });