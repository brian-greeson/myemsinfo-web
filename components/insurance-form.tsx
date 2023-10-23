'use client';

import { createCard } from '@/app/lib/cards';
import { useRouter } from 'next/navigation';
import { SubmitButton } from './submit-button';
export default function InsuranceForm({ userId }: { userId: number | undefined }) {
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

      <label className="w-full">
        <input className="m-1 rounded-md shadow-md w-full" id="name" name="name" type="text" required={true} placeholder="Name:" />
      </label>
      <label className="">
        <input className="m-1 rounded-md shadow-md w-full" id="policy-number" name="policy-number" type="text" placeholder="Policy #" />
      </label>
      <label className="">
        <input className="m-1 rounded-md shadow-md  w-full" id="group-number" name="group-number" type="text" placeholder="Group #" />
      </label>
      <label className="">
        <input className="m-1 rounded-md shadow-md w-full" id="phone-number" name="phone-number" type="tel" placeholder="Phone #" />
      </label>
      <label className="">
        <textarea className="m-1 rounded-md shadow-md textarea textarea-bordered textarea-lg w-full" id="description" name="description" placeholder="Additional info / Notes" />
      </label>
      <div className="">
        <SubmitButton text="Add Info" />
      </div>
    </form>
  );
}
