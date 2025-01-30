import Image from 'next/image'
import Down from './down'

export default function Introduction() {
  return (
    <div id="introduction" className="snap-center flex flex-col justify-between items-center bg-background h-screen text-textcolour">
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="flex justify-between items-center gap-44">
          <div>
            <p className="text-7xl py-4"> Hi, I&#39;m Donald </p>
            <p className="text-3xl"> Junior Software Engineer </p>
          </div>
          <Image 
            src="/cat.png"
            width={390}
            height={390}
            alt='picture of cat :3'
          />
        </div>
      </div>
      <Down/>
    </div>
  )
}
