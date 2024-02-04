const bodyParser = require("body-parser");
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { error } = require("console");
dotenv.config({ path: "./.env" });
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGOURL)
  .then(console.log("data base is connected"))
  .catch((erorr) => {
    console.log(erorr);
  });
app.listen(port, () => {
  console.log(`server runs on port ${port}`);
});
