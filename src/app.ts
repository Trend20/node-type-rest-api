import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';

const app = express();

// get port from config
const port = config.get<number>('port');

// listen to port
app.listen(port, async() =>{
  await connect();
  logger.info(`App listening on port http://localhost:${port}`);
});
