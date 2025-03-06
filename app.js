const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const formRoutes = require('./routes/routes');
const dotenv = require('dotenv');
const dbConnection = require('./config/database')
dotenv.config();

// الاتصال بقاعدة البيانات

dbConnection();


const app = express();

// إعدادات
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public_html")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/rule", (req, res) => {
    res.render("rule"); // بدون .ejs لأن Express يعرف الامتداد
});
// استيراد المسارات
app.use(formRoutes);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.use('/', formRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} `));
