const dev = {
  app: {
    port: parseInt(process.env.PORT, 10) || parseInt(process.env.DEV_APP_PORT, 10),
  }
};

const production = {
  app: {
    port: parseInt(process.env.PORT, 10) || parseInt(process.env.DEV_APP_PORT, 10),
  }
};

const config = {
  dev,
  production,
};

module.exports = config[process.env.NODE_ENV];