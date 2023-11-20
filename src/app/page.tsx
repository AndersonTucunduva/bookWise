import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-gray-700 p-5 md:flex-row">
      <div className="flex max-h-96 md:max-h-full">
        <Image
          src={'/start_logo.svg'}
          alt=""
          width={598}
          height={900}
          priority
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-700 ">
        <h1 className="flex text-2xl text-gray-100">Boas Vindas!</h1>
        <h2 className="text-base text-gray-200">
          Faça seu login ou acesse como visitante
        </h2>
        <Link href={'/'}>
          <button className="mt-10 flex h-[72px] w-[372px] items-center justify-start rounded-lg  bg-gray-600 p-6 text-gray-200 hover:bg-gray-500">
            <Image
              src={'/google-icon.svg'}
              alt=""
              width={32}
              height={32}
              className="mr-5"
            />
            Entrar com Google
          </button>
        </Link>
        <Link href={'/'}>
          <button className="mt-4 flex h-[72px] w-[372px] items-center justify-start rounded-lg  bg-gray-600 p-6 text-gray-200 hover:bg-gray-500">
            <Image
              src={'/git-icon.svg'}
              alt=""
              width={32}
              height={32}
              className="mr-5"
            />
            Entrar com GitHub
          </button>
        </Link>
        <Link href={'/'}>
          <button className="mt-4 flex h-[72px] w-[372px] items-center justify-start rounded-lg  bg-gray-600 p-6 text-gray-200 hover:bg-gray-500">
            <Image
              src={'/visitante_icon.svg'}
              alt=""
              width={32}
              height={32}
              className="mr-5"
            />
            Acessar como visitante
          </button>
        </Link>
      </div>
    </div>
  )
}
