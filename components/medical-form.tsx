'use client';

import { createCard } from '@/app/lib/cards';
import { useRouter } from 'next/navigation';
import { SubmitButton } from './submit-button';
export default function MedicalForm({ userId }: { userId: string }) {
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
        Date of Birth:
        <input className="m-1 rounded-xl shadow-md w-full" id="dob" name="dob" type="date" placeholder="Date of Birth" />
      </label>
      <label className="">
        <input className="m-1 rounded-xl shadow-md w-full" id="blood-type" name="blood-type" type="text" placeholder="Blood Type" />
      </label>
      <label className=" ">
        <textarea className="m-1 rounded-xl shadow-md w-full" id="allergies" name="allergies" placeholder="Allergies" />
      </label>
      <label className="">
        <textarea className="m-1 rounded-xl shadow-md w-full" id="medications" name="medications" placeholder="Medication" />
      </label>
      <div>
        <SubmitButton text="Add Info" />
      </div>
    </form>
  );
}
