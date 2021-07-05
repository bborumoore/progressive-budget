const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`Express/Node.js server running on: http://localhost:${PORT}`);
});