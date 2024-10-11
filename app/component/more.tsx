import Image from "next/image"


export default function More() {
    return (
        <div id="about" className="snap-center bg-secondary h-screen text-textcolour flex flex-col">
        <p className=" flex justify-center text-7xl my-6"> More! </p>
        <div className="flex flex-col h-full text-2xl place-content-center mx-48">
            <div className='flex py-8 items-center'>
                <Image 
                src="/more1.webp"
                width={200}
                height={200}
                alt=''
                />
                <div>
                    <p> Outside of my career I love anime, gaming and gym, currently playing Old School Runescape, Genshin Impact and League of Legends. I&#39;ve been watching anime since the days of multi-part episodes on Youtube with my favourite being Code Geass, Vinland Saga and Attack on Titan. I enjoy working out and pushing myself. Combining the three I&#39;ve started a passion project where I reward my gym sessions with simulated Pokémon card gacha pulls. Away from the computer screen I love rock climbing, currently only indoor!</p> 
                </div>
            </div>
        </div>
        </div>
    )
}