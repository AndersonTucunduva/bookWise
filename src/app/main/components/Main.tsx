import { ChevronRight, LineChart } from 'lucide-react'
import Post from './Post'
import Link from 'next/link'
import Plus from './Plus'

export default function Main() {
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-5">
        <h1 className="mt-20 flex items-center text-2xl text-gray-100">
          <LineChart className="mr-4 text-green-100" width={32} height={32} />
          Inicio
        </h1>
        <h2 className="mb-4 mt-10 text-sm text-gray-100">
          Avaliações mais recentes
        </h2>
        <Post />
        <Post />
        <Post />
      </div>

      <div className="col-span-4 mt-28 p-20">
        <div className="mb-2 flex justify-between">
          <h1 className=" text-sm text-gray-100">Livros populares</h1>
          <Link href={'/'} className="flex text-purple-100">
            Ver todos
            <ChevronRight />
          </Link>
        </div>
        <Plus />
        <Plus />
        <Plus />
      </div>
    </div>
  )
}
