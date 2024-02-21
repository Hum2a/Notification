import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Define the Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbnqHFld1Rpy3SPvRnWbqxST-pvtnQqWk",
  authDomain: "notif-designer.firebaseapp.com", // Use your project ID for authDomain
  databaseURL: "https://notif-designer.firebaseio.com", // Not provided in the configuration, adjust if needed
  projectId: "notif-designer",
  storageBucket: "notif-designer.appspot.com",
  messagingSenderId: "539797818217", // project_number
  appId: "1:539797818217:android:3e51d03f1e4c9e57290bf8", // mobilesdk_app_id
  measurementId: "" // Not provided in the configuration, adjust if needed
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export default app;
