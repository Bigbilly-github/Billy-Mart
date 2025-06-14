
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS3ZMvMybdpwJhtfnektSeyuF6qN_vaf4",
  authDomain: "billymart-e337a.firebaseapp.com",
  projectId: "billymart-e337a",
 storageBucket: "billymart-e337a.appspot.com",
  messagingSenderId: "1019835237065",
  appId: "1:1019835237065:web:42e6ea5a28d2f301330318",
  measurementId: "G-RFXV27NE4V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);