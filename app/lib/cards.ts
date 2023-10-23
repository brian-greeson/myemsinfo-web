'use server';
import prisma from '@/lib/prisma';
import { EmsInfo } from '@prisma/client';

export async function deleteCard(id: number) {
  await prisma?.emsInfo.update({
    where: {
      id,
    },
    data: {
      deleted: true,
    },
  });
}

export async function createCard(formData: FormData) {
  const userIDstring = formData.get('userId')?.toString();
  if (!userIDstring) return;

  const formDate = formData.get('dob')?.toString();
  let dateOfBirth = null;
  if (formDate) {
    dateOfBirth = new Date(formDate.toString());
  }

  const cardData = {
    userId: userIDstring,
    name: formData.get('name')?.toString(),
    policyNumber: formData.get('policy-number')?.toString(),
    groupNumber: formData.get('group-number')?.toString(),
    phoneNumber: formData.get('phone-number')?.toString(),
    description: formData.get('description')?.toString(),
    relationship: formData.get('relationship')?.toString(),
    dob: dateOfBirth,
    allergy: formData.get('allergies')?.toString(),
    medication: formData.get('medications')?.toString(),
  };

  try {
    const card = await prisma.emsInfo.create({
      data: cardData,
    });
  } catch (e) {
    console.log(e);
  }
}
