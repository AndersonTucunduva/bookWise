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
          <div className="flex max-h-48 gap-5 p-6">
            <Image src={'/Book.png'} width={108} height={152} alt="" />
            <div className="flex flex-col ">
              <strong className="mb-2 text-base text-gray-100">
                Revolução dos Bixos
              </strong>
              <h2 className="mb-4 text-sm text-gray-400">George Orwell</h2>
              <p className="overflow-hidden text-ellipsis text-sm text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae voluptatum ut perspiciatis aliquid libero ipsam modi
                ducimus architecto saepe incidunt ipsa inventore dolores, Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Culpa, nulla
                ipsam rerum animi praesentium dolor qui libero, unde perferendis
                dignissimos cum aperiam necessitatibus repellendus natus labore?
                Adipisci error soluta quibusdam. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam perferendis odit deleniti
                repellat hic labore dolore doloribus perspiciatis corporis
                itaque voluptatum, adipisci quos facilis consequatur atque
                tempore excepturi, numquam optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
