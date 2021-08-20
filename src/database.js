const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/apirest", {
    useCreateIndex: true, useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology:true
})
.then((db)=>{console.log("database connected on ", db.connection.host)})
.catch((err)=>{ console.log(err)})

