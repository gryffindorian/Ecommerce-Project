require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json()); //middleware

//Creating a connection to database

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vkth@301295",
  database: "EC_db",
});

//Connecting to database

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database.");
});

//Defining endpoint to handle form submissions

app.post("/submit-form", (req, res) => {
  const { name, email, password, confirmPassword, securityCode } = req.body;

  // Insert the data into the database
  const query =
    "INSERT INTO users (name, email, password, confirmPassword, securityCode) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, email, password, confirmPassword, securityCode],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into the database:", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).send("Data inserted successfully");
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Insert the data into the database
  const query = "SELECT * FROM users WHERE email = ? AND password = ? ";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error querrying the database:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    if (results.length === 0) {
      res.status(401).send("Invalid credentials");
    } else {
      res.status(200).send("login successful");
    }
  });
});

//Starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});

//therefore i created a a simple server at port 3001 using node and express such that when data is inserted in the form
//i can fetch that data using form handling feature of react (using event) and through axios i can snd that fetched
//data to this server 3001 using axios POST method , now we coonect our server to mysql databse and use
//its query method to insert data into the users table created in the workbench beforehand
