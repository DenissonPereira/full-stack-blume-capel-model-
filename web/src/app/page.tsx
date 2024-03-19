import { Titulo } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='h-screen flex flex-col justify-center items-center' style={{backgroundImage: `url('/assets/images/background.png')`}}>
      <div className="">
        <Titulo />
      </div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
