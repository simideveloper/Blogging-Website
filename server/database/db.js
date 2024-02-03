import mongoose from "mongoose"
const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-ccuh912-shard-00-00.cplgvos.mongodb.net:27017,ac-ccuh912-shard-00-01.cplgvos.mongodb.net:27017,ac-ccuh912-shard-00-02.cplgvos.mongodb.net:27017/?ssl=true&replicaSet=atlas-qdes3n-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log(`Database connected successfully`);
    }catch(error){
        console.log(`Error while Connecting with the database`,error);
    }
}
export default Connection