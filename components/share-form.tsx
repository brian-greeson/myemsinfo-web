'use client';
import { useState } from 'react';
import { SubmitButton } from './submit-button';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import { createShare } from '@/app/lib/shareLinks';
import 'react-multi-email/dist/style.css';

export default function ShareForm({ userId }: { userId: string }) {
  const [emails, setEmails] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);
  return (
    <div className=" p-1">
      <form action={createShare} className="flex flex-col">
        <h3>Share with users</h3>
        <input type="hidden" id="userId" name="userId" defaultValue={userId} />
        <input type="hidden" id="emails" name="emails" value={emails.join()} />
        {/** TODO; allow user to select what cards to share */}
        {/** Add users to share with */}
        <input className="m-1 rounded-md shadow-md w-full" id="name" name="name" type="text" required={true} placeholder="Name this Link i.e. EuroTrip" />
        <ReactMultiEmail
          id="emails"
          className="m-1 rounded-md shadow-md w-full"
          placeholder="Enter emails to share with"
          emails={emails}
          onChange={(_emails: string[]) => {
            setEmails(_emails);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          getLabel={(email, index, removeEmail) => (
            <div data-tag key={index}>
              <div data-tag-item>{email}</div>
              <span data-tag-handle onClick={() => removeEmail(index)}>
                <span className="material-symbols-outlined text-red-500">delete_forever</span>
              </span>
            </div>
          )}
        />
        <div>
          <SubmitButton text="Share Info" />
        </div>
      </form>
    </div>
  );
}
