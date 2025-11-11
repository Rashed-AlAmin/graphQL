const mongose=require('mongoose')

const productSchema=new mongose.Schema({
    title:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    inStock:{type:Boolean,required:true}
     
})
module.exports=mongose.model('product',productSchema)