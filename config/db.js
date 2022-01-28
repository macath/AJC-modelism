const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.dnn8m.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connected to MongoDb'))
    .catch((err) => console.log('Failed to connect to MongoDb', err));