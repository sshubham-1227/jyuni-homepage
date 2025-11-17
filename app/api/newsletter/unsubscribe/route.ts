import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import sgClient from '@sendgrid/client';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, token } = body;

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

    // Find and update subscription in Firestore
    const newsletterRef = adminDb.collection('newsletterSubscriptions');
    const existingDocs = await newsletterRef
      .where('email', '==', normalizedEmail)
      .where('status', '==', 'active')
      .limit(1)
      .get();

    if (existingDocs.empty) {
      return NextResponse.json(
        { message: 'Email not found in our subscription list.' },
        { status: 200 }
      );
    }

    // Update status to unsubscribed
    const doc = existingDocs.docs[0];
    await doc.ref.update({
      status: 'unsubscribed',
      unsubscribedAt: FieldValue.serverTimestamp(),
    });

    // Remove from SendGrid Marketing Contacts
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    if (sendGridApiKey) {
      try {
        sgClient.setApiKey(sendGridApiKey);
        
        // Remove from SendGrid contacts
        await sgClient.request({
          method: 'DELETE',
          url: '/v3/marketing/contacts',
          qs: {
            emails: normalizedEmail,
          },
        });
      } catch (sgError) {
        // Non-critical error - subscription is already removed from Firestore
        console.warn('Failed to remove from SendGrid contacts:', sgError);
      }
    }

    return NextResponse.json(
      { message: 'Successfully unsubscribed from newsletter.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to unsubscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET endpoint for unsubscribe via link (with email in query params)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
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

    // Find and update subscription in Firestore
    const newsletterRef = adminDb.collection('newsletterSubscriptions');
    const existingDocs = await newsletterRef
      .where('email', '==', normalizedEmail)
      .where('status', '==', 'active')
      .limit(1)
      .get();

    if (existingDocs.empty) {
      // Redirect to a page showing they're already unsubscribed
      return NextResponse.redirect(
        new URL(`/newsletter/unsubscribed?email=${encodeURIComponent(normalizedEmail)}&status=notfound`, request.url)
      );
    }

    // Update status to unsubscribed
    const doc = existingDocs.docs[0];
    await doc.ref.update({
      status: 'unsubscribed',
      unsubscribedAt: FieldValue.serverTimestamp(),
    });

    // Remove from SendGrid Marketing Contacts
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    if (sendGridApiKey) {
      try {
        sgClient.setApiKey(sendGridApiKey);
        
        // Remove from SendGrid contacts
        await sgClient.request({
          method: 'DELETE',
          url: '/v3/marketing/contacts',
          qs: {
            emails: normalizedEmail,
          },
        });
      } catch (sgError) {
        // Non-critical error - subscription is already removed from Firestore
        console.warn('Failed to remove from SendGrid contacts:', sgError);
      }
    }

    // Redirect to confirmation page
    return NextResponse.redirect(
      new URL(`/newsletter/unsubscribed?email=${encodeURIComponent(normalizedEmail)}&status=success`, request.url)
    );
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.redirect(
      new URL('/newsletter/unsubscribed?status=error', request.url)
    );
  }
}

