import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center space-between gap-44 bg-[#f1edf8] h-screen">
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
  );
}
