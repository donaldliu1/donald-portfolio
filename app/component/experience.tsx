import Image from "next/image"

export default function Experience() {
    return (
        <div id="experience" className="snap-center flex justify-center items-center space-between gap-44 bg-secondary h-screen text-textcolour flex flex-col">
            <p className=" flex justify-center text-7xl my-6"> Experience </p>
            <div className="flex flex-col h-full text-2xl place-content-between mx-48">
                <div className='flex py-8 items-center'>
                    <Image 
                    src="/schoolofcode.png"
                    width={200}
                    height={200}
                    alt='School of Code logo'
                    />
                    <p> School of Code Bootcamp </p>
                </div>
                <div className='flex py-8 items-center'>
                    <p> Fauna Green Living </p>
                    <Image 
                    src="/fgl.png"
                    width={200}
                    height={200}
                    alt='Fauna Green Living logo'
                    />
                </div>
            </div>   
        </div>
    )
}