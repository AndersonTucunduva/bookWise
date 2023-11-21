import Image from 'next/image'

export default function History() {
  return (
    <div>
      <h2 className="mb-2 text-gray-300">Há 2 dias</h2>
      <div className="mb-3 rounded-lg bg-gray-700">
        <div>
          <div className="flex gap-5 p-6">
            <Image src={'/Book.png'} width={108} height={152} alt="" />
            <div className="flex flex-col justify-between">
              <div>
                <strong className="mb-2 text-base text-gray-100">
                  Revolução dos Bixos
                </strong>
                <h2 className="mb-4 text-sm text-gray-400">George Orwell</h2>
              </div>
              <div className="text-purple-100">* * * * *</div>
            </div>
          </div>
          <h1 className="px-6 pb-6 text-sm text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatum ut perspiciatis aliquid libero ipsam modi ducimus
            architecto saepe incidunt ipsa inventore dolores, commodi temporibus
            est optio. Quisquam, possimus mollitia.
          </h1>
        </div>
      </div>
    </div>
  )
}
