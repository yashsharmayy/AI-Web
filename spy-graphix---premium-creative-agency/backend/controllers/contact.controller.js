import mongoose from "mongoose";
import { Contact } from "../models/Contact.js";
import { sendMail } from "../utils/sendMail.js";

// --------------------------------------------------
// Helpers
// --------------------------------------------------

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const cleanString = (value, maxLength = 1000) => {
  if (typeof value !== "string") return "";

  return value.trim().slice(0, maxLength);
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// --------------------------------------------------
// Allowed values
// --------------------------------------------------

const ALLOWED_STATUSES = ["New", "Read", "Replied", "In Progress", "Closed"];

const ALLOWED_SERVICES = [
  "Branding & Identity",
  "Social Media Design",
  "Print Design",
  "Marketing & Advertising",
  "Packaging Design",
  "Website & UI",
  "Motion Graphics",
  "Photo Editing",
  "E-commerce Design",
  "Corporate Design",
  "Restaurant Design",
  "Event Design",
  "Merchandise",
  "AI Creative",
];

const ALLOWED_BUDGETS = [
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

// --------------------------------------------------
// Submit Contact
// --------------------------------------------------

export const submitContact = async (req, res) => {
  try {
    console.log("📩 CONTACT REQUEST RECEIVED");
    console.log("📦 BODY:", req.body);

    let { name, email, company, service, budget, message } = req.body;

    // --------------------------------------------------
    // Clean input
    // --------------------------------------------------

    name = cleanString(name, 100);
    email = cleanString(email, 254).toLowerCase();
    company = cleanString(company, 150);
    service = cleanString(service, 150);
    budget = cleanString(budget, 100);
    message = cleanString(message, 5000);

    console.log("📦 Contact:", {
      name,
      email,
      company,
      service,
      budget,
    });

    // --------------------------------------------------
    // Required fields
    // --------------------------------------------------

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    // --------------------------------------------------
    // Validate name
    // --------------------------------------------------

    if (name.length < 2) {
      return res.status(400).json({
        success: false,
        error: "Name must contain at least 2 characters.",
      });
    }

    // --------------------------------------------------
    // Validate email
    // --------------------------------------------------

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // --------------------------------------------------
    // Validate message
    // --------------------------------------------------

    if (message.length < 5) {
      return res.status(400).json({
        success: false,
        error: "Message must contain at least 5 characters.",
      });
    }

    // --------------------------------------------------
    // Validate service
    // --------------------------------------------------

    const finalService = ALLOWED_SERVICES.includes(service)
      ? service
      : "General Inquiry";

    // --------------------------------------------------
    // Validate budget
    // --------------------------------------------------

    const finalBudget = ALLOWED_BUDGETS.includes(budget)
      ? budget
      : "Not specified";

    const finalCompany = company || "Not provided";

    // --------------------------------------------------
    // Check email configuration
    // --------------------------------------------------

    if (!process.env.ADMIN_EMAIL) {
      console.error("❌ ADMIN_EMAIL is not configured.");

      return res.status(500).json({
        success: false,
        error: "Email service is not configured.",
      });
    }

    // --------------------------------------------------
    // Save inquiry
    // --------------------------------------------------

    const newMessage = await Contact.create({
      name,
      email,
      company: finalCompany,
      service: finalService,
      budget: finalBudget,
      message,
      status: "New",
    });

    console.log("💾 Contact saved:", newMessage._id.toString());

    // --------------------------------------------------
    // Escape HTML
    // --------------------------------------------------

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(finalCompany);
    const safeService = escapeHtml(finalService);
    const safeBudget = escapeHtml(finalBudget);
    const safeMessage = escapeHtml(message);

    // ==================================================
    // ADMIN EMAIL
    // ==================================================

    try {
      console.log("📧 Sending admin notification to:", process.env.ADMIN_EMAIL);

      const adminEmail = await sendMail({
        to: process.env.ADMIN_EMAIL,

        // Clicking Reply in Gmail replies to the customer
        replyTo: email,

        subject: `New Contact Inquiry - ${name}`,

        text: `
New contact inquiry received.

Name: ${name}
Email: ${email}
Company: ${finalCompany}
Service: ${finalService}
Budget: ${finalBudget}

Message:
${message}
        `,

        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="
  margin:0;
  padding:30px;
  background:#f5f5f5;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:650px;
  margin:auto;
  background:#ffffff;
  padding:30px;
  border-radius:12px;
">

<h2 style="margin-top:0;">
New Contact Inquiry
</h2>

<hr>

<p>
<strong>Name:</strong><br>
${safeName}
</p>

<p>
<strong>Email:</strong><br>
${safeEmail}
</p>

<p>
<strong>Company:</strong><br>
${safeCompany}
</p>

<p>
<strong>Service:</strong><br>
${safeService}
</p>

<p>
<strong>Budget:</strong><br>
${safeBudget}
</p>

<hr>

<h3>Project Brief</h3>

<p style="white-space:pre-line;">
${safeMessage}
</p>

<hr>

<p style="font-size:12px;color:#777;">
SPY GRAPHIX Contact System
</p>

</div>

</body>
</html>
        `,
      });

      console.log("✅ Admin notification sent:", adminEmail.messageId);
    } catch (emailError) {
      console.error("❌ Admin email failed:", emailError.message);
    }

    // ==================================================
    // CUSTOMER CONFIRMATION
    // ==================================================

    try {
      console.log("📧 Sending confirmation to:", email);

      const customerEmail = await sendMail({
        to: email,

        subject: "We received your inquiry - SPY GRAPHIX",

        text: `
Hi ${name},

Thank you for contacting SPY GRAPHIX.

We have received your project inquiry.

Our creative team will review your brief and get back to you within 24 hours.

Regards,
SPY GRAPHIX
        `,

        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="
  margin:0;
  padding:30px;
  background:#f5f5f5;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:650px;
  margin:auto;
  background:#ffffff;
  padding:30px;
  border-radius:12px;
">

<h2>
Thank you for contacting SPY GRAPHIX
</h2>

<p>
Hi ${safeName},
</p>

<p>
We have received your project inquiry.
</p>

<p>
Our creative team will review your brief and get back to you within 24 hours.
</p>

<br>

<p>
Regards,<br>
<strong>SPY GRAPHIX</strong>
</p>

</div>

</body>
</html>
        `,
      });

      console.log("✅ Customer confirmation sent:", customerEmail.messageId);
    } catch (emailError) {
      console.error("❌ Customer confirmation failed:", emailError.message);
    }

    // --------------------------------------------------
    // Response
    // --------------------------------------------------

    return res.status(201).json({
      success: true,
      message:
        "Inquiry submitted successfully! Our creative team will contact you shortly.",
      data: {
        id: newMessage._id,
        status: newMessage.status,
      },
    });
  } catch (error) {
    console.error("❌ Submit contact error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to submit contact inquiry.",
    });
  }
};

// ==================================================
// GET ALL CONTACTS
// ==================================================

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

    return res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("❌ Get contacts error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to fetch contact messages.",
    });
  }
};

// ==================================================
// UPDATE STATUS
// ==================================================

export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: "Invalid contact ID.",
      });
    }

    if (!ALLOWED_STATUSES.includes(status)) {
      return res.status(400).json({
        success: false,
        error: "Invalid contact status.",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact status updated successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("❌ Update contact status error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to update contact status.",
    });
  }
};

// ==================================================
// DELETE CONTACT
// ==================================================

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: "Invalid contact ID.",
      });
    }

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully.",
    });
  } catch (error) {
    console.error("❌ Delete contact error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to delete contact.",
    });
  }
};

// ==================================================
// REPLY TO CONTACT
// ==================================================

export const replyContact = async (req, res) => {
  try {
    const { id } = req.params;

    let { replyText } = req.body;

    replyText = cleanString(replyText, 5000);

    if (!replyText) {
      return res.status(400).json({
        success: false,
        error: "Reply text is required.",
      });
    }

    if (replyText.length < 2) {
      return res.status(400).json({
        success: false,
        error: "Reply must contain at least 2 characters.",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: "Invalid contact ID.",
      });
    }

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Message not found.",
      });
    }

    const safeName = escapeHtml(contact.name);
    const safeReply = escapeHtml(replyText);

    // --------------------------------------------------
    // Send reply
    // --------------------------------------------------

    const result = await sendMail({
      to: contact.email,

      subject: "Reply from SPY GRAPHIX",

      text: `
Hi ${contact.name},

${replyText}

Regards,
SPY GRAPHIX
      `,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="
  margin:0;
  padding:30px;
  background:#f5f5f5;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:650px;
  margin:auto;
  background:#ffffff;
  padding:30px;
  border-radius:12px;
">

<h2>SPY GRAPHIX</h2>

<p>
Hi ${safeName},
</p>

<p style="white-space:pre-line;">
${safeReply}
</p>

<br>

<p>
Regards,<br>
<strong>SPY GRAPHIX</strong>
</p>

</div>

</body>
</html>
      `,
    });

    console.log("✅ Reply email sent:", result.messageId);

    // --------------------------------------------------
    // Update status
    // --------------------------------------------------

    contact.status = "Replied";

    await contact.save();

    return res.status(200).json({
      success: true,
      message: "Reply sent successfully.",
      data: {
        id: contact._id,
        status: contact.status,
      },
    });
  } catch (error) {
    console.error("❌ Reply contact error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to send reply.",
    });
  }
};
