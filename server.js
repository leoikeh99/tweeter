const express = require("express");
const app = express();
const db = require("./config/db");

db();

app.use(express.json({ extended: false, limit: "50mb" }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/follows", require("./routes/follows"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
