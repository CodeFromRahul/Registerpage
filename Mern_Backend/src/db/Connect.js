const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/SKDCRegistrationForm",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(() => {
  console.log('Connection successfull');
}).catch((e) => {
  console.log('NO connection ');
})