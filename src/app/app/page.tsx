import {auth} from "@/auth";

const AppHome = async () => {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>App Page</div>
    </main>
  );
};

export default AppHome;
