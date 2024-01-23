const mongoose = require('mongoose');

// const dbUrl = process.env.DB_URL;
const dbUrl = process.env.Dummy_URL;

module.exports.connect = async () => {
  try {
    await mongoose.connect(dbUrl, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log('Database connected');
  } catch (error) {
    console.error(`Database connection error: ${error}`);
    process.exit(1);
  }
};

// Event listener for when the connection is closed
mongoose.connection.on('disconnected', () => {
  console.log('Database connection closed');
});

// Event listener for handling SIGINT (Ctrl+C) to gracefully close the connection
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Database connection terminated');
  process.exit(0);
});
