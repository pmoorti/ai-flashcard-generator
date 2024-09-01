import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-flashcard-saas-4f0db.firebaseapp.com",
  projectId: "ai-flashcard-saas-4f0db",
  storageBucket: "ai-flashcard-saas-4f0db.appspot.com",
  messagingSenderId: "711789082434",
  appId: "1:711789082434:web:e04d84afd4b42663e8fadb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
