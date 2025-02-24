import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

// Set SendGrid API Key
const API_KEY = process.env.SENDGRID_API_KEY || 'abcdef123456'
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'test@example.com'

sgMail.setApiKey(API_KEY);

export const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = {
    to,
    from: FROM_EMAIL,
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
