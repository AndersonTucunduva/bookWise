import { BookOpen, Bookmark, LibraryBig, ListChecks } from 'lucide-react'
import Image from 'next/image'

export default function Info() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src={'/eu.jpg'}
            alt=""
            width={72}
            height={72}
            className="rounded-full"
          />
        </div>
        <h1 className="mt-5 text-xl text-gray-100">Anderson Tucunduva</h1>
        <h2 className="mt-2 text-base text-gray-400">Membro desde 1983</h2>
        <div className="mt-10">
          <Image src={'/rectangle.svg'} alt="" width={32} height={4} />
        </div>
      </div>
      <div className="mt-14 flex items-center justify-start gap-4">
        <BookOpen width={32} height={32} className="text-green-100" />
        <div>
          <h2 className="text-base text-gray-200">3850</h2>
          <h2 className="text-sm text-gray-300">Paginas lidas</h2>
        </div>
      </div>
      <div className="mt-14 flex items-center justify-start gap-4">
        <LibraryBig width={32} height={32} className="text-green-100" />
        <div>
          <h2 className="text-base text-gray-200">10</h2>
          <h2 className="text-sm text-gray-300">Livros avaliados</h2>
        </div>
      </div>
      <div className="mt-14 flex items-center justify-start gap-4">
        <ListChecks width={32} height={32} className="text-green-100" />
        <div>
          <h2 className="text-base text-gray-200">8</h2>
          <h2 className="text-sm text-gray-300">Autores lidos</h2>
        </div>
      </div>
      <div className="mt-14 flex items-center justify-start gap-4">
        <Bookmark width={32} height={32} className="text-green-100" />
        <div>
          <h2 className="text-base text-gray-200">Computadores</h2>
          <h2 className="text-sm text-gray-300">Categoria mais lida</h2>
        </div>
      </div>
    </div>
  )
}
