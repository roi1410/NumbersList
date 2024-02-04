const express=require("express")
const routerCreator=express.Router()
const phonNumberController=require("../controller/phonController")
// here we create rout for the controrler 


routerCreator.route("/addContact").post(phonNumberController.createContact)
routerCreator.route("/AllContact").get(phonNumberController.AllContact)
routerCreator.route("/DeleteContact").post(phonNumberController.DeleteContact)
routerCreator.route("/SearchContactById").post(phonNumberController.SearchContactById)
routerCreator.route("/SearchContactByName").post(phonNumberController.SearchContactByName)
routerCreator.route("/updateContactByID").post(phonNumberController.updateContactByID)
module.exports=routerCreator
