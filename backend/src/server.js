require('dotenv/config');
const express = require('express');
const cors = require('cors');

const app = express();

const {
  app: { port },
} = require('./config/generalConfigs');

const routes = require('./routes');

app.use(cors());
app.disable('x-powered-by');

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`=> App listening on port ${port}...`));
