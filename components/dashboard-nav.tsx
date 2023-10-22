import Link from 'next/link';

export default async function DashboardNav() {
  return (
    <div className="flex flex-row  center-items justify-evenly text-xs md:text-lg">
      {/* <ul className="menu bg-base-200 menu-horizontal rounded-box">
        <li> */}
      <Link className=" hover:font-bold" href="/dashboard/profile">
        <span className="material-symbols-outlined">article</span>
        My Info
      </Link>
      {/* </li>
        <li> */}

      <Link className=" hover:font-bold" href="/dashboard/links">
        <div>
          <span className="material-symbols-outlined ">group_add</span>
          Shared with Me
          {/* <span className="badge badge-sm badge-warning">NEW</span> */}
        </div>
      </Link>
      {/* </li>
        <li> */}
      <Link className=" hover:font-bold" href="/dashboard/mylinks">
        <span className="material-symbols-outlined">groups</span>
        Shared to Others
        {/* <span className="badge badge-sm badge-warning">NEW</span> */}
      </Link>
      {/* </li>
      </ul> */}
    </div>
  );
}
