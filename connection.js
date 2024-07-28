
const mongoose=require('mongoose')

async function connectToDB(uri){
    await mongoose.connect(uri)
}

module.exports=connectToDB