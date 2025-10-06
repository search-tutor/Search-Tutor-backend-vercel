const express = require("express");
const admin = require("firebase-admin");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

// Initialize Firebase Admin SDK
const decodedString = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf-8');
const serviceAccount = JSON.parse(decodedString);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.get("/", (req, res) => {
  res.send("Minimal server is live");
});

app.listen(port, () => {
  console.log(`search teacher is sitting on port ${port}`);
});

module.exports = app;