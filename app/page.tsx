import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex flex-col">
        <Image className="m-2" src="/img/emergency.png" width={200} height={200} alt="Emergency Cross" />
        <div className="max-w-md">
          <h2 className="text-4xl font-bold m-2">
            My <span className="text-error">Ems</span> Info
          </h2>

          <h2 className="text-3xl text-info font-bold m-0 p-0">Help Others Help You</h2>
          <p className="py-6">Securely share your emergency information. Share with groups of individuals, forever or only a limited amount of time. Easily share your information with a group of travel companions.</p>
          <p className="py-6">Secure. Free. Easy.</p>
          <Link className="btn btn-primary" href="/login">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
