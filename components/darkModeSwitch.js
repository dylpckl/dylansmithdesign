import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function DarkModeSwitch() {

    const [isOn, setIsOn] = useState(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('theme') === 'light') {
                return true
            } else {
                return false
            }
        }
    })

    const toggleSwitch = () => setIsOn(!isOn)

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    }
    if (typeof window !== 'undefined') {
        if (isOn) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }
    if (typeof window !== 'undefined') {
        if (
            localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
        ) { document.documentElement.classList.add('dark') }
        else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div onClick={toggleSwitch} className={`flex-start flex h-10 w-14 rounded-full bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${isOn && 'place-content-end'}`}>

            <motion.div
                className="flex w-8 h-8 items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
            >
                <motion.div whileTap={{ rotate: 360 }}>
                    {isOn ? (<MoonIcon className="h-6 w-6 text-slate-200" />) : (<SunIcon className="h-6 w-6 text-yellow-300" />)}
                </motion.div>

            </motion.div>

        </div>
    )
}