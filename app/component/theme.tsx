"use client";

import { useEffect, useState } from "react";

export default function Theme() {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("Theme");

        if (selectedTheme) {
            document.body.classList.add(selectedTheme)
            setTheme(selectedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark")
            setTheme("dark")
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches){
            document.body.classList.add("light")
            setTheme("light")
        }
    }, []);

    const changeTheme = (newTheme: string) => {
        if (theme) {
            document.body.classList.remove(theme);
        }
        document.body.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="z-50 border-4 border-textcolour rounded-lg text-textcolour grid grid-cols-2 grid-rows-2 w-[5%] aspect-square absolute end-[1%] top-[2%] opacity-15 hover:opacity-100">
            <button className="bg-light" onClick={() => changeTheme("light")}></button>
            <button className="bg-dark" onClick={() => changeTheme("dark")}></button>
            <button className="bg-royal" onClick={() => changeTheme("royal")}></button>
            <button className="bg-runescape" onClick={() => changeTheme("runescape")}></button>
        </div>
    )
}