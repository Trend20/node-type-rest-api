import mongoose from "mongoose";
import config from 'config';

const connect = async () =>{
  const dbUrl = config.get<string>('dbUrl');

  return await mongoose.connect(dbUrl)
                  .then(() =>{
                    console.log('Connected to the database successfully!')
                  })
                  .catch((error) =>{
                    console.error(error)
                    process.exit(1)
                  })
}

export default connect;