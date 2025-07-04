import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENTS = ['t.pirnay85@googlemail.com'];
const CC_RECIPIENT = 'felix.schulze@why-worry.eu';

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      throw new Error('Email configuration is missing');
    }

    const data = await request.json();
    const { name, company, email, phone, industry, message } = data;

    // Validate required fields
    if (!name || !company || !email || !phone || !industry) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      throw new Error('Email configuration is invalid');
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: RECIPIENTS.join(', '),
      cc: CC_RECIPIENT,
      subject: `Neue Kontaktanfrage von ${name} - ${company}`,
      text: `
Name: ${name}
Unternehmen: ${company}
E-Mail: ${email}
Telefon: ${phone}
Branche: ${industry}

Nachricht:
${message || 'Keine Nachricht angegeben'}
      `,
      html: `
<h2>Neue Kontaktanfrage</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Unternehmen:</strong> ${company}</p>
<p><strong>E-Mail:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${phone}</p>
<p><strong>Branche:</strong> ${industry}</p>
<h3>Nachricht:</h3>
<p>${message || 'Keine Nachricht angegeben'}</p>
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
    } catch (sendError) {
      console.error('Failed to send email:', sendError);
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error in contact form handler:', error);
    
    // Return user-friendly error message
    let errorMessage = 'Es gab einen Fehler beim Senden Ihrer Nachricht.';
    
    if (error instanceof Error) {
      if (error.message.includes('configuration')) {
        errorMessage = 'Es gibt ein Problem mit der E-Mail-Konfiguration. Bitte kontaktieren Sie uns telefonisch.';
      } else if (error.message.includes('verification')) {
        errorMessage = 'Die E-Mail-Verbindung konnte nicht hergestellt werden. Bitte versuchen Sie es später erneut.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 