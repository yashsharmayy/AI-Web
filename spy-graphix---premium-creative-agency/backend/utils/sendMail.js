import nodemailer from "nodemailer";

// --------------------------------------------------
// Validate SMTP configuration
// --------------------------------------------------

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

for (const variable of requiredEnv) {
  if (!process.env[variable]) {
    console.warn(`⚠️ Missing environment variable: ${variable}`);
  }
}

// --------------------------------------------------
// SMTP Transporter
// --------------------------------------------------

const smtpPort = Number(process.env.SMTP_PORT) || 587;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",

  port: smtpPort,

  // Gmail:
  // 465 = SSL
  // 587 = STARTTLS
  secure: smtpPort === 465,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// --------------------------------------------------
// Verify SMTP connection
// --------------------------------------------------

export const verifyMailConnection = async () => {
  try {
    await transporter.verify();

    console.log("✅ SMTP mail server connected successfully");

    return true;
  } catch (error) {
    console.error("❌ SMTP connection failed:");
    console.error(error.message);

    return false;
  }
};

// --------------------------------------------------
// Send Email
// --------------------------------------------------

export const sendMail = async ({ to, subject, html, text, replyTo }) => {
  try {
    // -----------------------------
    // Validate recipient
    // -----------------------------

    if (!to || typeof to !== "string") {
      throw new Error("Recipient email is required");
    }

    // -----------------------------
    // Validate subject
    // -----------------------------

    if (!subject || typeof subject !== "string") {
      throw new Error("Email subject is required");
    }

    // -----------------------------
    // Email options
    // -----------------------------

    const mailOptions = {
      from: `"SPY GRAPHIX" <${process.env.SMTP_USER}>`,

      to,

      subject,

      text,

      html,
    };

    // -----------------------------
    // Optional Reply-To
    // -----------------------------

    if (replyTo && typeof replyTo === "string") {
      mailOptions.replyTo = replyTo;
    }

    // -----------------------------
    // Send email
    // -----------------------------

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully");
    console.log("📧 To:", to);
    console.log("🆔 Message ID:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("❌ Failed to send email:");
    console.error(error.message);

    throw error;
  }
};
