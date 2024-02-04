const { error } = require("console");
const Contact = require("../models/phonNumberModel");
exports.createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.send(newContact);
  } catch (erorr) {
    res.send(erorr);
  }
};

exports.AllContact = async (req, res) => {
  try {
    const allContacts = await Contact.find({});
    res.send(allContacts);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.DeleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.query.id);
    res.send(`the ${req.query.id} is delete `);
  } catch (erorr) {
    res.status(500).send(error);
  }
};
exports.SearchContactById = async (req, res) => {
  try {
    const searchedContact = await Contact.findById(req.query.id);
    res.send(searchedContact);
  } catch (erorr) {
    res.send(erorr);
  }
};
// http://localhost:8000/api/phonNumbers/SearchContactById?id=65b908497c1ce202c0b27723&name=roi
exports.SearchContactByName = async (req, res) => {
  try {
    const searchedContact = await Contact.findOne({ name: req.query.name });

    if (!searchedContact) {
      res.send(false);
    } else {
      res.send(searchedContact);
    }
  } catch (error) {
    res.send(error.massege);
  }
};
exports.updateContactByID = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      phonNumber: req.body.phonNumber,
      imgUrl: req.body.imgUrl,
      email: req.body.email,
    });
    res.send(req.body);
  } catch (erorr) {
    res.status(500).send(error);
  }
};
