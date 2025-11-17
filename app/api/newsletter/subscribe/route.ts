import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import sgClient from '@sendgrid/client';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if Firebase Admin is initialized
    if (!adminDb) {
      console.error('Firebase Admin not initialized');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Check if SendGrid is configured
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'support@jyuni.com';

    if (!sendGridApiKey) {
      console.error('SendGrid API key not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize SendGrid
    sgMail.setApiKey(sendGridApiKey);

    // Check if email already exists in Firestore
    const newsletterRef = adminDb.collection('newsletterSubscriptions');
    const existingDoc = await newsletterRef
      .where('email', '==', normalizedEmail)
      .where('status', '==', 'active')
      .limit(1)
      .get();

    if (!existingDoc.empty) {
      // Email already subscribed
      return NextResponse.json(
        { message: 'You are already subscribed to our newsletter!' },
        { status: 200 }
      );
    }

    // Store in Firestore
    const subscriptionData = {
      email: normalizedEmail,
      subscribedAt: FieldValue.serverTimestamp(),
      source: 'website',
      status: 'active',
    };

    await newsletterRef.add(subscriptionData);

    // Add to SendGrid contacts
    try {
      const msg = {
        to: normalizedEmail,
        from: {
          email: fromEmail,
          name: 'Jyuni Team',
        },
        subject: 'Welcome to Jyuni Newsletter!',
        html: generateWelcomeEmailHTML(normalizedEmail),
        text: generateWelcomeEmailText(normalizedEmail),
      };

      await sgMail.send(msg);

      // Also add to SendGrid Marketing Contacts (optional)
      try {
        sgClient.setApiKey(sendGridApiKey);
        await sgClient.request({
          method: 'PUT',
          url: '/v3/marketing/contacts',
          body: {
            contacts: [
              {
                email: normalizedEmail,
              },
            ],
          },
        });
      } catch (sgError) {
        // Non-critical error - email was sent, just contact list update failed
        console.warn('Failed to add to SendGrid contacts list:', sgError);
      }
    } catch (sgError) {
      // If SendGrid fails, we still have the email in Firestore
      console.error('SendGrid error:', sgError);
      // Don't fail the request - email is stored in Firestore
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

function generateWelcomeEmailText(email: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jyuni.com';
  const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`;
  return `
Welcome to Jyuni!

Hi there,

Thank you for subscribing to the Jyuni newsletter! We're excited to have you on board.

You'll receive updates about:
- New features and product updates
- Best practices for ABA practice management
- Industry insights and tips
- Special offers and announcements

If you have any questions, feel free to reach out to us at support@jyuni.com.

Best regards,
The Jyuni Team

---
Don't want to receive these emails? Unsubscribe here: ${unsubscribeUrl}
  `.trim();
}

function generateWelcomeEmailHTML(email: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jyuni.com';
  const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Jyuni Newsletter</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif; 
          line-height: 1.6; 
          color: #1e293b; 
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          padding: 20px;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .header-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%);
          padding: 40px 30px;
          text-align: center;
        }
        .header-gradient h1 {
          color: #ffffff;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 10px 0;
          letter-spacing: -0.5px;
        }
        .header-gradient p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          margin: 0;
        }
        .content {
          padding: 40px 30px;
        }
        .content p {
          color: #475569;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .features-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          margin: 30px 0;
        }
        .features-card h3 {
          color: #1e293b;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 16px 0;
        }
        .feature-item {
          display: flex;
          align-items: center;
          margin: 12px 0;
          color: #475569;
          font-size: 15px;
        }
        .feature-item::before {
          content: '✓';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-radius: 50%;
          font-size: 14px;
          font-weight: 600;
          margin-right: 12px;
          flex-shrink: 0;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%);
          color: white;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          margin: 20px 0;
          text-align: center;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        .footer {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }
        .footer p {
          color: #64748b;
          font-size: 15px;
          margin-bottom: 8px;
        }
        .footer a {
          color: #3b82f6;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .unsubscribe {
          background: #f8fafc;
          padding: 20px 30px;
          border-top: 1px solid #e2e8f0;
          text-align: center;
        }
        .unsubscribe p {
          margin: 0;
          font-size: 12px;
          color: #94a3b8;
        }
        .unsubscribe a {
          color: #64748b;
          text-decoration: underline;
        }
        @media only screen and (max-width: 600px) {
          body { padding: 10px; }
          .email-wrapper { border-radius: 12px; }
          .header-gradient { padding: 30px 20px; }
          .header-gradient h1 { font-size: 28px; }
          .content { padding: 30px 20px; }
          .features-card { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header-gradient">
          <h1>Welcome to Jyuni!</h1>
          <p>Thank you for subscribing to our newsletter</p>
        </div>
        
        <div class="content">
          <p style="font-size: 18px; color: #1e293b; font-weight: 500;">Hi there,</p>
          
          <p>Thank you for subscribing to the Jyuni newsletter! We're excited to have you on board and share valuable insights about ABA practice management.</p>
          
          <div class="features-card">
            <h3>You'll receive updates about:</h3>
            <div class="feature-item">New features and product updates</div>
            <div class="feature-item">Best practices for ABA practice management</div>
            <div class="feature-item">Industry insights and tips</div>
            <div class="feature-item">Special offers and announcements</div>
          </div>
          
          <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@jyuni.com" style="color: #3b82f6; text-decoration: none;">support@jyuni.com</a>.</p>
          
          <div class="footer">
            <p style="color: #1e293b; font-weight: 500;">Best regards,</p>
            <p style="color: #1e293b; font-weight: 500;">The Jyuni Team</p>
          </div>
        </div>
        
        <div class="unsubscribe">
          <p>
            Don't want to receive these emails? <a href="${unsubscribeUrl}">Unsubscribe here</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

