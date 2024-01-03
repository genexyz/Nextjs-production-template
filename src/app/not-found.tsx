import Link from "next/link";

import {Button} from "@/components/ui/button";

const NotFound = () => (
  <div className="container flex h-screen flex-col justify-center space-y-4 text-center">
    <h1 className="text-6xl font-bold">404</h1>
    <h2 className="text-3xl">Page Not Found</h2>
    <p className="text-lg">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link href="/">
      <Button className="text-base">Go Back Home</Button>
    </Link>
  </div>
);

export default NotFound;
