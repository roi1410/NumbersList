const express=require("express")
const app=express()
const routerCreator=require("./routes/phonNumbersRoutes")
const cors=require("cors")
app.use(cors())
module.exports=app
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hi")
})
// need to setup rout shit
app.use("/api/phonNumbers",routerCreator)