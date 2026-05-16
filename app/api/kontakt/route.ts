import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const TO = 'flecmen@seznam.cz';

export async function POST(request: Request) {
  // Lazy init — avoids build-time error when RESEND_API_KEY not set
  // Sending domain: set RESEND_FROM=web@reflekplus.cz after verifying domain in Resend dashboard
  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM = process.env.RESEND_FROM ?? 'onboarding@resend.dev';

  const body = await request.json().catch(() => null);

  const { name, email, phone, message } = (body ?? {}) as Record<string, string>;

  if (!name?.trim()) return NextResponse.json({ error: 'Chybí jméno.' }, { status: 400 });
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: 'Neplatný e-mail.' }, { status: 400 });
  if (!phone?.trim() || !/^[+\d][\d\s\-().]{8,}$/.test(phone))
    return NextResponse.json({ error: 'Neplatné telefonní číslo.' }, { status: 400 });
  if (!message?.trim() || message.trim().length < 20)
    return NextResponse.json({ error: 'Zpráva musí mít alespoň 20 znaků.' }, { status: 400 });


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
