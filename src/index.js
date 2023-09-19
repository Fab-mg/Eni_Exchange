require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const dbConnection = require('./db/db.connection');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//import routes here
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

//paste routes here
app.use('/users/', userRoutes);
app.use('/auth/', authRoutes);

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`M1 server running on port ${port}`);
});
