import mysql from "mysql2";

// create a connection to MySQL (update with your Clever Cloud credentials)
const connection = mysql.createConnection({
  host: "your-db-host", // e.g. beqs4bkfwxjf0whke2wo-mysql.services.clever-cloud.com
  user: "your-db-username", // from Clever Cloud
  password: "your-db-password",
  database: "beqs4bkfwxjf0whke2wo", // Clever Cloud DB name
});

// I run this sql query to create the table my local MySQL database [don't excute already connted config/db.js]

// SQL query to create table
const createTableQuery = `
CREATE TABLE IF NOT EXISTS employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  employee_id VARCHAR(20) UNIQUE NOT NULL,
  department VARCHAR(100),
  designation VARCHAR(100),
  project VARCHAR(100),
  type ENUM('Office', 'Remote') DEFAULT 'Office',
  status ENUM('Permanent', 'Contract') DEFAULT 'Permanent',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  profile_img VARCHAR(255)
);
`;

// Run query
connection.query(createTableQuery, (err, result) => {
  if (err) {
    console.error("❌ Error creating table:", err);
  } else {
    console.log("✅ Table created successfully:", result);
  }
  connection.end();
});
