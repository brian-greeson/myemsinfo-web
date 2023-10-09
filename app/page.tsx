import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <Image 
    src="/img/emergency.png"
    width={300} 
    height={300}
    alt="Emergency Cross"
    />
    <div className="max-w-md">
    <h2 className="text-5xl font-bold">My <span className='text-error'> Ems</span> Info</h2>

      <h2 className="text-3xl text-info font-bold">Help Others Help You</h2>
      <p className="py-6">Securely share your emergency information. Share with groups of individuals, forever or only a limited amount of time. Easily share your information with a group of travel companions.</p>
      <p className="py-6">Secure. Free. Easy.</p>
   <br/>
      <Link className="btn btn-primary"
      href='/login'
      >Get Started</Link>
    </div>
  </div>
</div>
  <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Protected Page
          </Link>
</main>

  );
}
