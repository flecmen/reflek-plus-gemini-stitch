import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const TO = 'flecmen@seznam.cz';

export async function POST(request: Request) {
  // Lazy init — avoids build-time error when RESEND_API_KEY not set
  // Sending domain: set RESEND_FROM=web@reflekplus.cz after verifying domain in Resend dashboard
  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM = process.env.RESEND_FROM ?? 'onboarding@resend.dev';

  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: 'Chybí povinná pole.' }, { status: 400 });
  }

  const { name, email, phone, message } = body as {
    name: string;
    email: string;
    phone?: string;
    message: string;
  };

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Dotaz z webu - ${name}`,
    text: [
      `Jméno: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      '',
      'Zpráva:',
      message,
    ]
      .filter((l) => l !== null)
      .join('\n'),
    html: `
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      <hr/>
      <p><strong>Zpráva:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Nepodařilo se odeslat zprávu.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
