export default function Skills() {
    return (
        <div id="skills" className="snap-center flex flex-col justify-center items-center space-between gap-44 bg-background h-screen text-textcolour">
            <p className=" flex justify-center text-7xl my-6"> Skills </p>
            <div className="flex h-full text-2xl place-content-evenly w-full mx-48">
                <div>
                    <p><u>Frontend</u></p>
                    <ul>Next.js</ul>
                    <ul>TypeScript</ul>
                    <ul>Tailwind CSS</ul>
                    <ul>React</ul>
                </div>
                <div>
                    <p><u>Backend</u></p>
                    <ul>Node.js</ul>
                    <ul>Express</ul>
                    <ul>PostgreSQL</ul>
                    <ul>Supabase</ul>
                </div>
                <div>
                    <p><u>Deployment CI/CD</u></p>
                    <ul>Vercel</ul>
                    <ul>ESlint</ul>
                    <ul>Snyk</ul>
                </div>
                <div>
                    <p><u>Testing</u></p>
                    <ul>Playwright</ul>
                    <ul>Vitest</ul>
                    <ul>Postman</ul>
                    <ul>Zod</ul>
                </div>
                <div>
                    <p><u>Devops</u></p>
                    <ul>AWS</ul>
                    <ul>Docker</ul>
                </div>
                <div>
                    <p><u>Other</u></p>
                    <ul>Agile</ul>
                    <ul>Figma</ul>
                    <ul>Shopify</ul>
                    <ul>Github</ul>
                </div>
            </div>
        </div>
    )
}