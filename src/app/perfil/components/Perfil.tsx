import { Search, User2 } from 'lucide-react'

import History from './History'
import Info from './Info'

export default function Perfil() {
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-5">
        <h1 className="mt-20 flex items-center text-2xl text-gray-100">
          <User2 className="mr-4 text-green-100" width={32} height={32} />
          Perfil
        </h1>
        <div className="mb-4 mt-10 flex w-full items-center rounded border border-gray-500 p-3 shadow-sm">
          <Search className="mr-2 h-[20] w-[20] text-gray-500" />
          <input
            type="text"
            placeholder="Buscar livro avaliado"
            className="flex-1 border-0 bg-transparent text-gray-500 placeholder-gray-500 "
          />
        </div>
        <History />
        <History />
        <History />
      </div>

      <div className="col-span-4 mt-10 p-36">
        <Info />
      </div>
    </div>
  )
}
