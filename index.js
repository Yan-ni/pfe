const app = require('./server');

const port = process.env.PORT || 5000;

app
  .startDatabase()
  .then(() => app.listen(port, () => console.log(`server up and running on port ${port}`)));
