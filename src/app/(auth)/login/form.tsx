"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react";

import {Button} from "@/components/ui/button";
import LoadingSpinner from "@/components/icons/loading-spinner";

const RegisterForm = () => {
  const [clickedGoogle, setClickedGoogle] = useState(false);

  return (
    <>
      <Button
        size="lg"
        type="button"
        variant={"default"}
        className="flex items-center gap-4 border"
        onClick={() => {
          setClickedGoogle(true);
          signIn("google", {callbackUrl: "/app"});
        }}
      >
        {clickedGoogle ? (
          <LoadingSpinner />
        ) : (
          <Image
            src="/assets/icons/google.svg"
            loading="lazy"
            alt="google logo"
            width="20"
            height="20"
          />
        )}
        <span>Continue with Google</span>
      </Button>
      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-gray-500 transition-colors hover:text-black"
        >
          Sign up.
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
