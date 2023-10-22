'use client';

import { useMemo, useState } from 'react';
import InsuranceForm from './insurance-form';
import ContactForm from './contact-form';
import InstructionForm from './instruction-form';
import MedicalForm from './medical-form';

export default function AddCard({ userId }: { userId: number | undefined }) {
  const [formType, setFormType] = useState('insurance');

  const setFormFields = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormType(event.target.value);
  };

  const renderForm = useMemo(() => {
    switch (formType) {
      case 'insurance':
        return <InsuranceForm userId={userId} />;
      case 'contact':
        return <ContactForm userId={userId} />;
      case 'instruction':
        return <InstructionForm userId={userId} />;
      case 'medical':
        return <MedicalForm userId={userId} />;
      default:
        return null;
    }
  }, [formType, userId]);

  return (
    <div className="m-2 sm:max-w-lg rounded-xl shadow-md bg-gray-50">
      <div className=" p-1">
        <label>
          <select onChange={setFormFields} name="formType" id="formType" placeholder="Info Type">
            <option value={'insurance'}>Insurance Information</option>
            <option value={'contact'}>Emergency Contact</option>
            <option value={'instruction'}>General Instructions</option>
            <option value={'medical'}>Medical Information</option>
          </select>
          {renderForm}
        </label>
      </div>
    </div>
  );
}
