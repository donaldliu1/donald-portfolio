export default function Skills() {
    return (
        <div id="skills" className="snap-center flex flex-col justify-center items-center space-between gap-44 bg-background h-screen text-textcolour">
            <p className=" flex justify-center text-7xl my-6"> Skills </p>
            <div className="flex h-full text-2xl place-content-evenly w-full mx-48">
                <div>
                    <p>Frontend</p>
                </div>
                <div>
                    <p>Backend</p>
                </div>
                <div>
                    <p>Deployment CI/CD</p>
                </div>
                <div>
                    <p>Testing</p>
                </div>
                <div>
                    <p>Devops</p>
                </div>
                <div>
                    <p>Other</p>
                </div>
            </div>
        </div>
    )
}