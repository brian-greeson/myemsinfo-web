import ShareForm from '@/components/share-form';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

async function getUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }
  const email = session.user.email;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      shareLinks: { where: { deleted: false } },
    },
  });
  return user;
}
export default async function AddShare() {
  const user = await getUser();
  return (
    <div className="m-2 sm:max-w-lg rounded-xl shadow-md bg-gray-50">
      <ShareForm userId={user.id} />
    </div>
  );
}
