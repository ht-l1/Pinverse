import mongoose from 'mongoose';

const connection = mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successful connection with MongoDB Server");
  })
  .catch((error) => {
    console.log("Error with MongoDB's connectivity", error);
  });

export default connection;
