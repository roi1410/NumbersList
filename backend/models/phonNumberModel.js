const mongoose=require("mongoose")


const phonNumberSchema=new mongoose.Schema(
    {
        name:{
            type:String
        
        },
        phonNumber:{
            type:String
        
        },
        imgUrl:{
            type:String
        }
        ,email:{
            type:String
        }
    }
)

const Contact=mongoose.model("Contacts",phonNumberSchema)
module.exports=Contact

