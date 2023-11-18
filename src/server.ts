import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
const port = process.env.PORT || 7000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.dbUser as string}:${
        config.dbPassword as string
      }@cluster0.ehl62mb.mongodb.net/first-project?retryWrites=true&w=majority`
    );

    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
