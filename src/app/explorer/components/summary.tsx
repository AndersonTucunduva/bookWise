import { Glasses, Search } from 'lucide-react'
import Category from './Category'
import Plus from '@/app/main/components/Plus'

export default function Summary() {
  return (
    <div>
      <div className="mt-20 flex justify-between pr-24">
        <h1 className=" flex items-center text-2xl text-gray-100">
          <Glasses className="mr-4 text-green-100" width={32} height={32} />
          Explorar
        </h1>
        <div className="flex w-[433px] items-center rounded border border-gray-500 p-3 shadow-sm">
          <Search className="h-[20] w-[20] text-gray-500" />
          <input
            type="text"
            placeholder="Buscar livro avaliado"
            className="flex-1 border-0 bg-transparent text-gray-500 placeholder-gray-500 "
          />
        </div>
      </div>
      <div className="mt-14 flex gap-3">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <div className="mt-12 grid grid-cols-3 gap-5 pr-24">
        <Plus />
        <Plus />
        <Plus />
        <Plus />
      </div>
    </div>
  )
}
