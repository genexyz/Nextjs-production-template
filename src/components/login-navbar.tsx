import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.webp";

const LoginNavbar = () => (
  <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 py-2 shadow-lg backdrop-blur">
    <nav className="flex items-center justify-between px-6 lg:px-10">
      <Link href="/" className="flex flex-row items-center gap-x-2">
        <Image alt="Logo" className="h-auto w-8 cursor-pointer" src={logo} />
        <h2 className="text-2xl font-bold">Company LOGO</h2>
      </Link>
      <div className="flex gap-x-2">
        <button className="flex items-center justify-center px-6 py-2.5 font-semibold text-black">
          Sign up
        </button>
        <button className="flex items-center justify-center rounded-md bg-[#6738EE] px-6 py-2.5 font-semibold text-white transition duration-200 hover:shadow-lg hover:drop-shadow">
          Login
        </button>
      </div>
    </nav>
  </header>
);

export default LoginNavbar;
