import Image from 'next/image'

export default function Plus() {
  return (
    <div>
      <div className="mb-3 rounded-lg bg-gray-700">
        <div>
          <div className="flex gap-5 p-6">
            <Image src={'/Book.png'} width={64} height={94} alt="" />
            <div className="flex flex-col">
              <strong className="mb-2 text-base text-gray-100">
                Revolução dos Bixos
              </strong>
              <h2 className="mb-4 text-sm text-gray-400">George Orwell</h2>
              <span className="text-sm text-purple-100">* * * * *</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
