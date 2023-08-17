const express = require("express");
const app = new express();
const helmet = require("helmet");
const bodyParser = require("body-parser");

const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration of CSP
// Must be placed before the next app.use()!
app.use(
	helmet.contentSecurityPolicy({
    directives: {
      styleSrc: ["'self'"],
      fontSrc: ["'self'"],
      reportUri: "/api/csp/report",
    },
  })
);

// Provide static files in the "public" directory
app.use(express.static("public"));

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server started at: http://localhost:${PORT}`);
  }
});

module.exports = app;
