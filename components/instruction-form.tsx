'use client';

import { createCard } from '@/app/lib/cards';
import { useRouter } from 'next/navigation';
import { SubmitButton } from './submit-button';
export default function InstructionForm({ userId }: { userId: number | undefined }) {
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
        <input className="m-1 rounded-xl shadow-md w-full" id="name" name="name" type="text" required={true} placeholder="Instructions Title" />
      </label>
      <label className="">
        <textarea className="m-1 rounded-xl shadow-md w-full" id="description" name="description" placeholder="Enter your instructions here" />
      </label>
      <div>
        <SubmitButton text="Add Info" />
      </div>
    </form>
  );
}
