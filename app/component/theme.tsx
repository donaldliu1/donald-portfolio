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
        <div className="border-4 border-textcolour rounded-lg text-textcolour grid grid-cols-2 grid-rows-2 w-[5%] aspect-square absolute end-[1%] top-[2%]">
            <button onClick={() => changeTheme("light")}>L</button>
            <button onClick={() => changeTheme("dark")}>D</button>
            <button onClick={() => changeTheme("royal")}>R</button>
            <button onClick={() => changeTheme("runescape")}>R</button>
        </div>
    )
}