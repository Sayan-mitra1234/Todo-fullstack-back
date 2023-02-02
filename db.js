const mongoose=require('mongoose');

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try {
        mongoose.connect("mongodb+srv://admin:admin1234@cluster0.nbs3luc.mongodb.net/?retryWrites=true&w=majority",connectionParams)
        console.log("Connected Database successfully");
    } catch (error) {
        console.log(error);
        console.log("Can not connect to Database");
    }
}