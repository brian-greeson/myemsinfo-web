'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useState } from 'react';
// import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClick = (event: any) => {
    setShowSpinner(true);
  };

  return (
    <div className="">
      <button className="p-3 m-auto w-full rounded-xl border shadow border-gray-500 bg-gray-100 hover:bg-gray-200" type="submit" aria-disabled={pending} onClick={handleClick}>
        {text}
        {showSpinner && pending && <span className="loading loading-spinner loading-lg"></span>}
      </button>
    </div>
  );
}
