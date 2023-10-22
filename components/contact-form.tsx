'use client';

import { createCard } from '@/app/lib/cards';
import { useRouter } from 'next/navigation';
import { SubmitButton } from './submit-button';
export default function ContactForm({ userId }: { userId: number | undefined }) {
  const router = useRouter();

  const create = (formData: FormData) => {
    try {
      createCard(formData);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form action={create} className="flex flex-col">
      <input type="hidden" id="userId" name="userId" defaultValue={userId} />

      <label className="">
        <input className="m-1 rounded-xl shadow-md w-full" id="name" name="name" type="text" required={true} placeholder="Name:" />
      </label>
      <label className="">
        <input className="m-1 rounded-xl shadow-md w-full" id="relationship" name="relationship" type="text" placeholder="Relationship:" />
      </label>
      <label className="">
        <input className="m-1 rounded-xl shadow-md w-full" id="phone-number" name="phone-number" type="tel" placeholder="Phone #" />
      </label>
      <div>
        <SubmitButton text="Add Info" />
      </div>
    </form>
  );
}
