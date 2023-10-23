'use server';
import prisma from '@/lib/prisma';
import { nanoid } from 'nanoid';

export async function createShare(formData: FormData) {
  // Collect the users this link should be connected to
  const userId = formData.get('userId')?.toString() || '';
  const emails = formData.get('emails')?.toString().split(',');
  const usersById = await prisma.user.findMany({
    where: { email: { in: emails } },
    select: { id: true },
  });
  // Add the creating user's id
  usersById.push({ id: userId });

  const data = {
    active: true,
    name: formData.get('name')?.toString() || '',
    users: { connect: usersById },
    url: nanoid(10),
  };
  try {
    await prisma.shareLink.create({ data, include: { users: true } });
  } catch (e) {
    console.log(e);
  }
}
