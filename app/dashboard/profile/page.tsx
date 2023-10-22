import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import InfoCard from '@/components/info-card';
import AddCard from '@/components/add-card';

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
      emsInfo: { where: { deleted: false } },
    },
  });
  return user;
}

export default async function Profile() {
  const user = await getUser();

  return (
    <div className="">
      <div className="">Add Cards of emergency information. What goes in a card is up to you. Some typical cards include an emergency contact card, Insurance information card, Specific instructions or preferred hospital.</div>
      <div className="flex flex-row flex-wrap ">{user?.emsInfo.map((card) => <InfoCard key={card.id} card={card} />)}</div>

      <AddCard userId={user?.id} />
    </div>
  );
}
