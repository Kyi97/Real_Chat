import React from "react";
import { auth_, auth } from "../firebase";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new auth_.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="font-bold text-5xl text-black text-center">
        Welcome back
      </div>
      <div className="font-semibold text-lg text-gray-500 text-center mt-3">
        Make communication with your connections
      </div>
      <button
        className="mt-16 transition ease-in-out hover:scale-110  hover:-translate-y-1 duration-300 py-5 px-20 bg-black font-semibold text-white rounded-md hover:bg-green flex"
        onClick={signInWithGoogle}
      >
        <FcGoogle size={"25px"} className="mr-5" />
        <span className="">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignIn;
