import Image from 'next/image'

export default function About() {
    return (
        <div id="about" className="snap-center bg-secondary h-screen text-textcolour ">
            <p className=" flex justify-center text-7xl py-12"> About me</p>
            <div className="flex flex-col h-full content-between text-4xl px-40">
                <div className='flex py-12'>
                    <Image 
                    src="/cat.png"
                    width={230}
                    height={230}
                    alt='picture of cat :3'
                    />
                    <p> My passion for coding started when I was younger, creating and automating AutoHotKey scripts for my games and using Rainmeter to create custom desktop widgets. This early interest led me to study Level 3 Software Development in college and dabble with Python while I studied Physics at the University of Salford. Due to circumstances beyond my control, I was unable to continue my higher education and took up a role as a cinema assistant.</p>
                </div>
                <div className='flex py-12'>
                    <p> Feeling unfulfilled in my role and eager to learn something new and exciting, I looked for more meaningful direction. That&#39;s when I came across the School of Code bootcamp - a 16-week intensive programme that not only focused on teaching coding but also getting us used to real-world environments. We practiced pair programming, adopted agile methodologies, and engaged in daily standups, hackathons, and creating and sticking to MVPs. I thrived in this fast-paced environment, and for my final project, I worked with a real stakeholder to revamp an e-commerce website, which is set to go live soon.</p>
                    <Image 
                    src="/cat.png"
                    width={230}
                    height={230}
                    alt='picture of cat :3'
                    />
                </div>
                <div className='flex py-12'>
                <Image 
                    src="/cat.png"
                    width={230}
                    height={230}
                    alt='picture of cat :3'
                    />
                    <p> After completing the School of Code, I am excited to continue my journey of learning and growing in the world of technology. I am eager to secure my first role as a junior software developer. In the meantime, I am continuously refining my skills by working on passion projects that align with my interests, allowing me to stay sharp and expand my knowledge in all things tech-related. </p>        
                </div>
            </div>
        </div>
    )
}