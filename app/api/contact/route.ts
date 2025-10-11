import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
    console.log(name, email, message);
  // Create a transporter object using the default SMTP transport
  // You will need to use your own email service provider (e.g., Gmail, SendGrid)
  // and configure the transporter with your credentials.
  const transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //   user: process.env.EMAIL_USER, // Your email address
    //   pass: process.env.EMAIL_PASS, // Your email password or app password
    // },
    host: 'smtp.gmail.com', // Using a test service for now
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'jdejesus93@gmail.com', // Your email address where you want to receive messages
    subject: `New message from ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}
