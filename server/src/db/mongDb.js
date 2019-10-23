const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/multiply-db-api";
mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('connected');
    });


