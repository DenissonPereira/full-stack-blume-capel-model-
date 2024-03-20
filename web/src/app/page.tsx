import { Titulo } from '@/components';
import Link from 'next/link';
import { VscDebugStart } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div className='h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url('/assets/images/background.png')` }}>
      <div className="">
        <Titulo />
      </div>
      <div className='flex gap-4'>
        <button className='bg-branco p-4 rounded-md text-preto font-bold hover:bg-branco_hover flex justify-center items-center gap-1'><VscDebugStart />Get Started</button>
        <button className='bg-azul_claro p-4 rounded-md text-preto font-bold hover:bg-azul_hover flex justify-center items-center gap-1'><IoBookOutline />Learn BCM</button>
      </div>
    </div>
  )
}
