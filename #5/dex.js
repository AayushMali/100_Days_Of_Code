import express from 'express';
//import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

app.set("view engine", "ejs");

//app.use(bodyparser.urlencoded({extended : true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try{
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    console.log(response.data.type);
    console.log(response.data.activity);
    const result = response.data.type + '-' + response.data.activity
    res.render("index", { data: result });
    }
//
    catch (error) {
        console.error("Failed to make request:", error.message);
    }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});