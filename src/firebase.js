import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWr4slB3wOzFn8VEyDUUEF4xQS0joDepY",
  authDomain: "realchat-fa332.firebaseapp.com",
  projectId: "realchat-fa332",
  storageBucket: "realchat-fa332.appspot.com",
  messagingSenderId: "66160741885",
  appId: "1:66160741885:web:6ef3678a469c1747191d94",
  measurementId: "G-B62ETC7VGK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
