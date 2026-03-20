import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Schéma ultra-simple (optionnel si tu valides déjà dans le form)
interface Body {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message }: Body = await req.json();

    if (!name || !email || !message)
      return NextResponse.json({ ok: false, msg: 'Missing fields' }, { status: 400 });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',          // ou mailhog, sendgrid, postmark…
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,  // ton adresse
        pass: process.env.EMAIL_PASS,  // mot-de-passe d’application Gmail
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,        // l’adresse qui reçoit
      subject: `Portfolio contact – ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, msg: 'Server error' }, { status: 500 });
  }
}