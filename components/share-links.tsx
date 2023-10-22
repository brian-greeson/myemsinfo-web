import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function ShareLinks({ user }) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="px-2.5">
        <div className="w-full rounded-2xl border border-gray-100 shadow-xl">
          <div className="overflow-x-auto">
            <h2 className="h2">Shares</h2>
            <table className="table-sm">
              <thead>
                <th>Status</th>
                <th>User</th>
                <th>Share Link</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {user?.shareLinks.map((link) => (
                  <tr>
                    <td>{link.deleted ? <button className="btn w-full btn-sm btn-warning">Deactivated</button> : <button className="btn btn-sm btn-success">Active</button>}</td>
                    <td>{link.user.displayName}</td>
                    <td>
                      <div className="flex flex-row">
                        <button className="btn btn-sm">
                          {link.shareLink.url} <span className="material-symbols-outlined">content_copy</span>{' '}
                        </button>
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
