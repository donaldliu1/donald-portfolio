import Image from 'next/image'

export default function Introduction() {
return (
    <div id="introduction" className="snap-center flex justify-center items-center space-between gap-44 bg-background h-screen text-textcolour">
        <div>
          <p className="text-7xl py-4"> Hi, I&#39;m Donald </p>
          <p className="text-3xl"> Junior Software Developer </p>
        </div>
        <Image 
          src="/cat.png"
          width={390}
          height={390}
          alt='picture of cat :3'
          >
        </Image>
    </div>
)
}