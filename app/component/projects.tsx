import Image from "next/image"

export default function Projects() {
    return (
        <div id="projects" className="snap-center flex justify-center items-center space-between bg-background h-screen text-textcolour flex flex-col">
            <p className=" flex justify-center text-7xl my-6"> Projects </p>
            <div className="flex flex-col h-full text-2xl place-content-center mx-48">
                <div className='flex py-8 items-center'>
                    <Image 
                    src="/fgl.png"
                    width={200}
                    height={200}
                    alt='Fauna Green Living logo'
                    />
                    <div className="px-6">
                    <p className="text-center py-4"> Fauna Green Living </p>
                    <p> For my final project for School of Code we was given a real stakeholder who wanted their e-commerce website to be completely revamped as it was not fit for purpose and had poor UI/UX. The time frame was 4 weeks and within that time we was able to make a custom front-end, greater SEO and a shopify backend for product management. </p>
                    </div>
                </div>
                <div className='flex py-8 items-center'>
                <div className="px-6">
                    <p className="text-center py-4"> PokePull </p>
                    <p> Passion project to learn more about interacting with RESTful API, MongoDB and Mongoose. I am a big fan of gacha and love the randomness of it combined with my love for Pokemon card packs, the project is to simulate opening a random card pack while also providing users to view their inventory and upgrading cards they have pulled. </p>
                    </div>
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