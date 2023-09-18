require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
//const dbConnection = require('./db/db.connection');
const mongoose = require('mongoose')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
//mongodb+srv://robsonmbolatiana93:lUCS2UOxtBXOXghv@cluster0.ntjzfhg.mongodb.net/Restau?retryWrites=true&w=majority
 mongoose.connect('mongodb://127.0.0.1:27017/test2',connectionParams)
.then( () => {
  console.log('Connected to the database ')
})
.catch( (err) => {
  console.error(`Error connecting to the database. n${err}`);
})



//import routes here
const userRoutes = require('./routes/user.routes');
const postRouter  = require('./routes/post.routes');
const commentRouter = require('./routes/comment.routes');
const relationRouter = require('./routes/relation.routes');

//paste routes here
app.use('/users/', userRoutes);
app.use('/posts',postRouter);
app.use('/comment',commentRouter);
app.use('/relation',relationRouter)
///////connection DB////////////
 
 

//////////////////

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`M1 server running on port ${port}`);
});
