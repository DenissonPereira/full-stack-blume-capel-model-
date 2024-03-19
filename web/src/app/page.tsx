import { Titulo } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='h-screen flex flex-col justify-center items-center' style={{backgroundImage: `url('/assets/images/background.png')`}}>
      <div className="">
        <Titulo />
      </div>
      <div className='flex gap-4'>
        <button className='bg-branco p-4 rounded-md text-preto font-bold hover:bg-amarelo'>Get Started</button>
        <button className='bg-cinza p-4 rounded-md text-preto font-bold hover:bg-azul_azinzentado'>Learn BCM</button>
      </div>
    </div>
  )
}
