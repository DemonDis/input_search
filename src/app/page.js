// import Image from 'next/image'
// import variables from './variables.module.scss'
import ModalMain from '@/components/ModalMain';

export default function Home() {
  return (
    <main>
      {/* <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1> */}
        {/* <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        /> */}
        <ModalMain/>
    </main>
  )
}
