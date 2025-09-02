import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/email/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { senderEmail, message } = await request.json();

    // Validation
    if (!senderEmail || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (typeof senderEmail !== 'string' || senderEmail.length > 500) {
      return NextResponse.json(
        { error: 'Invalid email sender' },
        { status: 400 }
      );
    }

    if (typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
    }

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('📤 Attempting to send email...');

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@luis-flores.net>', // Using my own registered domain
      to: 'falucho@msn.com',
      subject: 'Message from Portfolio Contact Form',
      replyTo: senderEmail,
      react: ContactEmail({
        message: message,
        senderEmail: senderEmail,
      }),
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Email sent successfully:', data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error('❌ API route error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
