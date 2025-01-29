"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IconBrightnessUpFilled, IconMoon } from "@tabler/icons-react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-black rounded dark:text-white"
        >
            {theme === 'light' ? (
                <IconBrightnessUpFilled />
            ) : (
                <IconMoon />
            )}
        </button>
    )
}
