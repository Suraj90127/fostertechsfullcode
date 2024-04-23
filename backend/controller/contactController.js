const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel.js");
const { default: sendEmail } = require("../utils/sendMail.js");

const contactForm = asyncHandler(async (req, res) => {
  try {
    const { fname, lname, email, message } = req.body;

    const contact = await Contact.create(req.body);
    res.status(200).json({
      success: true,
      message: "form submit successfully",
      contact,
    });
    sendEmail({
      fname: contact.fname,
      lname: contact.lname,
      email: contact.email,
      phone: contact.message,
    });
    // console.log("object", contact)
  } catch (error) {
    // console.log(error)
    res.status(500).send({
      success: false,
      message: "Error in contact form",
      error,
    });
  }
});

module.exports = { contactForm };
