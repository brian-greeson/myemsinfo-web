'use client';

import Link from 'next/link';

export default function ShareLinks({ links }) {
  return (
    <div>
      <table className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {links.length === 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            links.map((link) => (
              <tr key={link.id}>
                <td>
                  <p>{link.name}</p>
                </td>
                <td>
                  <div className="flex flex-row">
                    <Link href={`link/${link.url}`} className="btn btn-sm">
                      {link.url} <span className="material-symbols-outlined">content_copy</span>
                    </Link>
                  </div>
                </td>
                <td>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
