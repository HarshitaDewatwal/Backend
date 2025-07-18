const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  try {
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
