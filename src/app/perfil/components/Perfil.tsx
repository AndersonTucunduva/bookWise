import { User2 } from 'lucide-react'

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
        <h2 className="mb-4 mt-10 text-sm text-gray-100">
          <input
            type="text"
            placeholder="Buscar livro avaliado"
            className="flex h-12 w-full rounded border border-gray-500 bg-gray-700 bg-[url('/search.svg')] bg-right bg-no-repeat p-5"
          />
        </h2>
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
