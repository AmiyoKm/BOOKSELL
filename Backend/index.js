const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());
 app.use(cors({
//     origin: ['http://localhost:5173/'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//     credentials: true
 }))

const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/order/order.route');
const userRoutes = require('./src/user/user.route');
app.use("/api/books", bookRoutes)
app.use("/api/order", orderRoutes)
app.use("/api/user", userRoutes)

// pass - 2215151139bookstore
async function main() {
    await mongoose.connect(process.env.URL);
    app.use('/', (req, res) => {
        res.send('BOOK SERVER');
    });
  }

  main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})