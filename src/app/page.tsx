import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
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
      href='/auth/login'
      >Get Started</Link>
    </div>
  </div>
</div>

    </main>
  )
}
