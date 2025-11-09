// controllers/contactControllers.js
const contactModel = require("../models/contact.Model");
const nodemailer = require("nodemailer");
require("dotenv").config();

// ✅ Create Nodemailer Transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_PASSKEY, // Gmail App Password (not normal Gmail password)
  },
});

// ✅ Verify transporter connection at server start
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter verification failed:", error.message);
  } else {
    console.log("✅ Email transporter is ready to send messages.");
  }
});

// ✅ Controller Function
const addContact = async (req, res) => {
  try {
    let { email, firstName, lastName, subject, message } = req.body;

    // Trim inputs
    email = email?.trim();
    firstName = firstName?.trim();
    lastName = lastName?.trim();
    subject = subject?.trim();
    message = message?.trim();

    // Basic validation
    if (!email || !firstName || !lastName || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required.",
      });
    }

    const fullName = `${firstName} ${lastName}`;

    // ✅ Define email options
    const mailOptions = {
      from: `"${fullName}" <${process.env.GOOGLE_USER}>`, // from your Gmail
      replyTo: email, // reply goes to sender
      to: process.env.GOOGLE_USER, // your main email to receive messages
      subject: `Portfolio Contact — ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    };

    // ✅ Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);

    // ✅ Save contact info to MongoDB
    const contactDetails = await contactModel.create({
      email,
      firstName,
      lastName,
      subject,
      message,
    });

    // ✅ Respond to frontend
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      contactDetails,
    });
  } catch (error) {
    console.error("❌ Error submitting contact form:", error.message);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error.",
    });
  }
};

module.exports = { addContact };
