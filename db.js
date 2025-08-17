const mongoose = require('mongoose')
const URI = 'mongodb+srv://zappier:S6X4Aw0Mfr3a70P7@cluster0.4ik5r3z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectToMongoose = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connected to Mongoose successfully');
  } catch (error) {
    console.error('Error connecting to Mongoose:', error.message);
  }
};

module.exports = connectToMongoose

// mongoose.set("strictQuery", false);
// const connectToMongo = () => mongoose.connect(URI, () => {
//     console.log("Connected to Mongo Successfully")
// })


// module.exports = connectToMongoose;
