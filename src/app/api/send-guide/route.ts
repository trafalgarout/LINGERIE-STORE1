import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email, result } = await req.json();

        if (!email || !result) {
            return NextResponse.json({ error: 'Email and results are required' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Lingerie Paradise <guides@lingerieparadise.store>',
            to: [email],
            subject: 'Your Personalized Lingerie Fit & Style Guide ✨',
            html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #d4a855; text-align: center;">Your Fit & Style Guide is Here!</h2>
          <p>Hello,</p>
          <p>Thank you for using our Bra Size Calculator. Based on your measurements, here are your estimated sizes:</p>
          
          <div style="background-color: #fcf9f2; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="text-transform: uppercase; font-size: 12px; color: #888; margin-bottom: 5px;">Your Primary Size (US)</p>
            <h1 style="font-size: 48px; color: #d4a855; margin: 0;">${result.us}</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>United States</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${result.us}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>United Kingdom</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${result.uk}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Europe</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${result.eu}</td>
            </tr>
          </table>

          <h3>What's Next?</h3>
          <p>Shopping for the perfect fit is an art. Here are a few tips to keep in mind:</p>
          <ul>
            <li><strong>The Scoop & Swoop</strong>: Always lean forward and "scoop" your breast tissue into the cups for the best fit.</li>
            <li><strong>Band Parallel</strong>: Your bra band should sit level across your back, not pull upwards.</li>
            <li><strong>Two Finger Rule</strong>: You should be able to slide two fingers comfortably under the band.</li>
          </ul>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://www.lingerieparadise.store/shop" style="background-color: #d4a855; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Shop Your Size Now</a>
          </div>

          <p style="font-size: 12px; color: #999; margin-top: 40px; text-align: center;">
            &copy; 2026 Lingerie Paradise Store. All rights reserved.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
