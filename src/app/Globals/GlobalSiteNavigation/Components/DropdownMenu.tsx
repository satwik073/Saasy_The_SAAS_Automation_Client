
'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { translating_navigattion_text } from '../NavigationWrapping/Constant'

type Props = {}

const DropdownMenuComponent = (props: Props) => {
    const { setTheme } = useTheme();
    const [theme_fetching_state, set_theme_fetching_state] = useState<string | null>(null);
    const save_theme_in_localStorage = (theme: string) => {
        localStorage.setItem('theme', theme);
    };
    useEffect(() => {
        const stored_theme_instance = localStorage.getItem('theme');
        if (stored_theme_instance) {
            setTheme(stored_theme_instance);
            set_theme_fetching_state(stored_theme_instance);
        }
    }, [setTheme]);
    const handle_theme_change = (new_fetched_theme_spotted: string) => {
        setTheme(new_fetched_theme_spotted);
        set_theme_fetching_state(new_fetched_theme_spotted);
        save_theme_in_localStorage(new_fetched_theme_spotted);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='z-[1000]'>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='z-50 mt-6'>
                {translating_navigattion_text.theme_selectors.map((theme, index) => (<DropdownMenuItem key={index} onClick={() => handle_theme_change(theme)}>{translating_navigattion_text.drop_down_content[index]}</DropdownMenuItem>))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownMenuComponent