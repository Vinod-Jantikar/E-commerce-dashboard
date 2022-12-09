const connect = require("./config/db");
const app = require("./index");

app.listen(6543, async () => {
  try {
    await connect();
    console.log("Listening on port 6543");
  } catch (error) {}
});
