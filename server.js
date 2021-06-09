const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.urlencoded({ 
    extended:true 
}));

app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Fitness-Tracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));

app.listen(PORT, () => {
  console.log(`Now running on this port: ${PORT}!`);
});