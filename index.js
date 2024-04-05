import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const joke = response.data;
    res.render("index", { joke });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching joke");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
