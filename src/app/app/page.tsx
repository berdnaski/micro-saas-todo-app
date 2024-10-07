import { getServerSession } from "next-auth";
import { authOptions } from '@/services/auth';
import { UserInfo } from "./_components/user-info";

const Page = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <main className="flex items-center justify-center h-screen">
        <UserInfo user={session?.user} />
    </main>
  );
};

export default Page;
