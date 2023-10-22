'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="justify-center rounded-xl border shadow border-gray-500 p-3 m-3 hover:bg-gray-100" type="submit" aria-disabled={pending}>
      {text}
    </button>
  );
}
