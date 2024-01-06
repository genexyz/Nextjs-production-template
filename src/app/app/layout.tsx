import AppNavbar from "@/components/app-navbar";

const AppLayout = ({children}: {children: React.ReactNode}) => (
  <>
    <AppNavbar />
    {children}
  </>
);

export default AppLayout;
