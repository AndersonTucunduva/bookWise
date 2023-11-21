import Image from 'next/image'

export default function Post() {
  return (
    <div>
      <div className="mb-3 rounded-lg bg-gray-700">
        <div className="flex justify-between p-6">
          <div className="flex gap-4">
            <Image
              src={'/eu.jpg'}
              width={40}
              height={40}
              className="rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-base text-gray-100">Anderson</h1>
              <h2 className="text-sm text-gray-400">Hoje</h2>
            </div>
          </div>
          <div className="text-purple-100">* * * * *</div>
        </div>
        <div>
          <div className="flex gap-5 p-6">
            <Image src={'/Book.png'} width={108} height={152} alt="" />
            <div className="flex flex-col">
              <strong className="mb-2 text-base text-gray-100">
                Revolução dos Bixos
              </strong>
              <h2 className="mb-4 text-sm text-gray-400">George Orwell</h2>
              <span className="text-sm text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae voluptatum ut perspiciatis aliquid libero ipsam modi
                ducimus architecto saepe incidunt ipsa inventore dolores,
                commodi temporibus est optio. Quisquam, possimus mollitia.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
