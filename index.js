const app = require('./app');
const { sequelize } = require('./app/models');
const port = process.env.PORT || 3000;

(async () => {
  // if force is set to true the database will create all tables all over again
  await sequelize.sync({ force: false });
  await sequelize.authenticate();
  app.listen(port, () => console.log(`server up and running on port ${port}`));
})();
