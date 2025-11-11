const mongoose=require('mongoose')

const connectToDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connect successfully')
    }catch(e){
        console.log('cannot connect to db',e)
        process.exit(1)
    }
}

module.exports=connectToDB