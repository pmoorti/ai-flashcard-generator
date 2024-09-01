// utils/firebaseAdmin.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://ai-flashcard-saas-4f0db.firebaseio.com" 
  });
}

export default admin;
