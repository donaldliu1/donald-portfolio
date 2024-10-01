import Image from "next/image"

export default function Projects() {
    return (
        <div id="projects" className="snap-center flex justify-center items-center space-between gap-44 bg-background h-screen text-textcolour flex flex-col">
            <p className=" flex justify-center text-7xl my-6"> Projects </p>
            <div className="flex flex-col h-full text-2xl place-content-between mx-48">
                <div className='flex py-8 items-center'>
                    <Image 
                    src="/fgl.png"
                    width={200}
                    height={200}
                    alt='Fauna Green Living logo'
                    />
                    <p> Fauna Green Living </p>
                </div>
                <div className='flex py-8 items-center'>
                    <p> PokePull </p>
                    <Image 
                    src="/pokepull.png"
                    width={200}
                    height={200}
                    alt='pokemon ball icon'
                    />
                </div>
            </div>
        </div>
    )
}