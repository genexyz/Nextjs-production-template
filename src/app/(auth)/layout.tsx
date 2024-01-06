import {ReactNode} from "react";

import Background from "@/components/background";

const AuthLayout = ({children}: {children: ReactNode}) => (
  <div className="flex h-screen w-screen justify-center">
    <Background />
    {children}
  </div>
);

export default AuthLayout;
