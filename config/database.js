const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/note')
  .then(() => console.log('Connection succesful!'))
  .catch((err) => console.log(err));