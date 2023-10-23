import InfoCard from '@/components/info-card';
import prisma from '@/lib/prisma';

export default async function LinkView({ params }: { params: { id: string } }) {
  const shareLink = await prisma.shareLink.findFirst({ where: { url: params.id }, include: { users: { include: { emsInfo: true } } } });

  return (
    <div>
      <h2>{shareLink?.name}</h2>
      {shareLink?.users.map((user) => (
        <div>
          <h3>{user.email}:</h3>
          <div className="flex flex-row flex-wrap ">{user?.emsInfo.map((card) => <InfoCard key={card.id} card={card} />)}</div>
        </div>
      ))}
      Emergency Information:
    </div>
  );
}
