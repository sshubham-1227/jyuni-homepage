import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin SDK
let adminApp: App | undefined;
let adminAuth: Auth | undefined;
let adminDb: Firestore | undefined;

try {
  // Check if already initialized
  if (getApps().length === 0) {
    adminApp = initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } else {
    adminApp = getApps()[0];
  }
  if (adminApp) {
    adminAuth = getAuth(adminApp);
    // Initialize Firestore - you can specify database ID if using multiple databases
    // Note: Region is set when creating the database in Firebase Console, not here
    // If you need to specify database ID: getFirestore(adminApp, 'database-id')
    // The region cannot be changed via code - it's set during database creation
    adminDb = getFirestore(adminApp);
  }
} catch (error) {
  console.error('Firebase Admin initialization error', {
    error: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined
  });
}

export { adminAuth, adminDb };

