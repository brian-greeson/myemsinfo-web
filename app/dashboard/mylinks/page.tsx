import ShareLinks from '@/components/share-links';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import Link from 'next/link';

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
      shareLinks: { where: { deleted: false }, select: { deleted: true, name: true, url: true, id: true } },
    },
  });
  console.log(user);
  return user;
}

export default async function MyLinks() {
  const user = await getUser();

  return (
    <div className="px-2.5">
      {/* Add horiz scroll if needed*/}
      <div className="overflow-x-auto">
        <h2 className="h2">Shares</h2>
        <Link href={'/dashboard/share'} className="btn btn-sm btn-primary">
          Add Link
        </Link>

        <div className="w-full rounded-2xl border border-gray-100 shadow-xl">{user && user.shareLinks.length > 0 ? <ShareLinks links={user?.shareLinks} /> : <p>Use the button above to share your emergency info with others.</p>}</div>
      </div>
    </div>
  );
}
