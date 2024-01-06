import {Metadata} from "next";

import Logo from "@/components/icons/logo";

import {siteConfig} from "../../../../config/site";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: `Sign in to ${siteConfig.name}`,
};

const LoginPage = () => (
  <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
    <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      <a href="/">
        <Logo className="h-10 w-10" />
      </a>
      <h3 className="text-xl font-semibold">
        Create your {siteConfig.name} account
      </h3>
      <p className="text-sm text-gray-500">
        Get started for free. No credit card required.
      </p>
    </div>
    <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
