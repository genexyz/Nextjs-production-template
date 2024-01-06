import Navbar from "@/components/navbar";

const HomeLayout = ({children}: {children: React.ReactNode}) => (
  <>
    <Navbar />
    {children}
  </>
);

export default HomeLayout;
