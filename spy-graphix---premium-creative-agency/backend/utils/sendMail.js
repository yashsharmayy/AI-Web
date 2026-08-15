import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection when server starts
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

export const sendMail = async ({ to, subject, html, text }) => {
  try {
    if (!to) {
      throw new Error("Recipient email is required");
    }

    const info = await transporter.sendMail({
      from: `"SPY GRAPHIX" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("✅ Email sent successfully");
    console.log("📧 To:", to);
    console.log("🆔 Message ID:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("❌ Failed to send email:");
    console.error(error);

    throw error;
  }
};
