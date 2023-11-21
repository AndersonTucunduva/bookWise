import Aside from '../components/Aside'
import Perfil from './components/Perfil'

export default function main() {
  return (
    <div className="max-w[1600px] mx-auto grid min-h-screen w-full grid-cols-12 bg-gray-800">
      <div className="col-span-3">
        <Aside />
      </div>
      <div className="col-span-9">
        <Perfil />
      </div>
    </div>
  )
}
