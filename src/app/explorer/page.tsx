import Aside from '../components/Aside'
import Summary from './components/summary'

export default function Explorer() {
  return (
    <div className="max-w[1600px] mx-auto grid min-h-screen w-full grid-cols-12 bg-gray-800">
      <div className="col-span-3">
        <Aside />
      </div>
      <div className="col-span-9">
        <Summary />
      </div>
    </div>
  )
}
