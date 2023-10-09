import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import prisma from '@/lib/prisma';

import SignOut from "@/components/sign-out";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function getUserLinks() {
  const session = await getServerSession(authOptions)
  
  if(!session?.user?.email){
  return null;
  }
  const email = session.user.email;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  
  });
  return ({links: [1,2,3]});
}
 


export default async function Dashboard() {
  const session = await getServerSession(authOptions)

    console.log(`Signed in as ${session}`);
 
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
         Signed In 
<SignOut/>
<button className='btn btn-info'>Share info</button>
<button className='btn btn-info'>Edit Shares</button>
<button className='btn btn-info'>My Ems Information</button>

         
      </div>
    </div>
    </div>
  );
}
