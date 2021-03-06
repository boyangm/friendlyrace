const express= require('express')
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const app = express();

// const routes = require("./routes");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
// app.use(routes);



// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/giggrab";
mongoose.connect(MONGODB_URI)
.then(() => console.log('Mongo Db connected'))
.catch(err => console.log(err));
<<<<<<< HEAD
=======

>>>>>>> fcc6fd86fb7b5f614265b8dec97c7abeed339242
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('giggrab/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'giggrab', 'build', 'index.html'))
    })
}


var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})