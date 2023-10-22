'use client';
import { EmsInfo } from '@prisma/client';
import { deleteCard } from '@/app/lib/cards';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

export default function InfoCard({ card }: { card: EmsInfo }) {
  const router = useRouter();
  const deleteById = (id: number) => {
    try {
      deleteCard(id);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-2 w-full sm:max-w-lg rounded-xl shadow-md bg-gray-50 ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div
            onClick={() => {
              deleteById(card.id);
            }}
          >
            <span className="material-symbols-outlined">delete_forever</span>
          </div>
        </div>
        <div className="p-1">
          <div className="w-full uppercase tracking-wide text-sm text-primary font-semibold">{card.name}</div>

          {card.description ? <p className=" w-full mt-2 text-slate-500">Notes: {card.description}</p> : null}
          {card.policyNumber ? <p className="mt-2 text-slate-500">Policy: {card.policyNumber}</p> : null}
          {card.groupNumber ? <p className="mt-2 text-slate-500">Group: {card.groupNumber}</p> : null}
          {card.relationship ? <p className="mt-2 text-slate-500">Relationship: {card.relationship}</p> : null}
          {card.phoneNumber ? <p className="mt-2 text-slate-500">Phone: {card.phoneNumber}</p> : null}
          {card.dob ? <p className="mt-2 text-slate-500">Date of Birth: {format(card.dob, 'LLLL d, yyyy')}</p> : null}
          {card.allergy ? <p className="mt-2 text-slate-500">Allergies: {card.allergy}</p> : null}
          {card.medication ? <p className="mt-2 text-slate-500">Medications: {card.medication}</p> : null}
        </div>
      </div>
    </div>
  );
}
