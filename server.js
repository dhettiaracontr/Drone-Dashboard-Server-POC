const express = require("express");
const cors = require("cors");
const OktaJwtVerifier = require('@okta/jwt-verifier');
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to drone poc application." });
});

// Set up Okta JWT Verifier
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://dev-24576281.okta.com/oauth2/default`,
  clientId: '0oad19by9xioR4q2R5d7',
});

// Protect the API route with JWT authentication
app.use('/api', (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const accessToken = match[1];

  oktaJwtVerifier.verifyAccessToken(accessToken,'api://default')
    .then(jwt => {
      req.jwt = jwt;
      next();
    })
    .catch(err => {
      res.status(401).json({ error: 'Unauthorized' });
    });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/dashboard.routes")(app);
require("./app/routes/damagebox.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
