import Link from 'next/link';

export default async function DashboardNav() {
  return (
    <div className="flex flex-row  center-items justify-evenly text-xs md:text-lg">
      <Link className=" hover:font-bold" href="/dashboard/profile">
        <span className="material-symbols-outlined p-1">article</span>
        My Info
      </Link>

      <Link className=" hover:font-bold" href="/dashboard/mylinks">
        <span className="material-symbols-outlined p-1">groups</span>
        Shared Info
      </Link>
    </div>
  );
}
