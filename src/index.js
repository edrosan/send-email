const express = require('express');
const v1Router = require('./v1/routes/index');
const v1EmailRouter = require('./v1/routes/emailRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/emails", v1EmailRouter);

app.listen(PORT, ()=> {
  console.log(`Server listening on ${PORT}`);
})