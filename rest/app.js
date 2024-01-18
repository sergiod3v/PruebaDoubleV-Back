const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const ticketRoutes = require("./routes/ticket-routes");
const pool = require("./db/db");
const { config } = require("./config/config");

const app = express();
const port = config.port;

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use("/api/v1/tickets", ticketRoutes);

// Start the server
pool.connect((err, client, release) => {
  if (err) {
    return console.error("error CONNECTING TO DB 1", err);
  }

  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("error CONNECTING TO DB 2", err);
    }
    console.log("connected to database");
  });
});

// Handle database connection error
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
