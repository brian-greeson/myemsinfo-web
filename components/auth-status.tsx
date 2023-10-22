import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignOut from './sign-out';
import { log } from 'console';

export default async function AuthStatus() {
  const session = await getServerSession(authOptions);
  log(session);
  return (
    <div className="absolute top-1 w-full flex justify-center items-center">
      {session && (
        <p className="text-stone-400 text-sm">
          Welcome {session.user?.email}{' '}
          <span className="btn btn-xs btn-warning">
            {' '}
            <SignOut />
          </span>
        </p>
      )}
    </div>
  );
}
