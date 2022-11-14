import express from 'express';
import config from 'config';

const app = express();

// get port from config
const port = config.get<number>('port');

// listen to port
app.listen(port, () =>{
  console.log(`App listening on port ${port}`);
});
