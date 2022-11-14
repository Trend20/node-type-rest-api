import express from 'express';
import config from 'config';
import connect from './utils/connect';

const app = express();

// get port from config
const port = config.get<number>('port');

// listen to port
app.listen(port, async() =>{
  await connect();
  console.log(`App listening on port ${port}`);
});
