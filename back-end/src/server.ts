import app from "./app";
import mongoose from "mongoose";

import env from "./util/validateEnv";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose(Database) Connected");
    app.listen(port, () => {
      console.log("Server running on port : ", port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
