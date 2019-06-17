var mongoose = require('mongoose');

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
}
mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lrcfn.mongodb.net/ProjectsHackathon?retryWrites=true',
  options,
  function(err) {
    if (err) {
       console.log(err);
     } else {
       console.log("Connection: Done!");
     }
  }
);

module.exports = mongoose;
