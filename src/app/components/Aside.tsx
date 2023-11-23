import { Glasses, LineChart, LogIn, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Aside() {
  return (
    <div className="p-10">
      <div className="flex h-[800px] max-h-[988px] max-w-[232px] flex-col justify-between rounded-xl bg-gradient-to-t from-gray-700 via-gray-700 to-gray-500 px-14 py-10">
        <div>
          <Image
            src={'/logo_wise.svg'}
            alt=""
            width={128}
            height={32}
            priority
            className="min-w-[128px] "
          />
          <div className="mt-16 flex flex-col items-start gap-4">
            <Link
              href={'/main'}
              className="flex gap-2 text-base text-gray-400 hover:text-gray-100 active:text-gray-100"
            >
              <LineChart />
              <h1>Inicio</h1>
            </Link>
            <Link
              href={'/explorer'}
              className="flex gap-2 text-base text-gray-400 hover:text-gray-100"
            >
              <Glasses />
              <h1>Explorar</h1>
            </Link>
            <Link
              href={'/perfil'}
              className="flex gap-2 text-base text-gray-400 hover:text-gray-100"
            >
              <User2 />
              <h1>Perfil</h1>
            </Link>
          </div>
        </div>
        <div>
          <Link href={'/'} className="flex items-center">
            <h1 className=" text-base text-gray-200">Fazer login</h1>
            <LogIn className="ml-3 text-green-100" width={20} height={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
