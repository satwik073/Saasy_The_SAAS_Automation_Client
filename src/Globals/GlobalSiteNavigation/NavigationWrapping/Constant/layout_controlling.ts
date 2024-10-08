interface CustomPointed {
    headed_text_logo: string;
    headed_text: string;
    tailed_text: string;
    button_radial_effect_causing_race_condition: string;
    span_tag_outlining: string;
    inline_source: string;
    left_aside_sorted: string;
    absolute_structure: string;
    list_and_listitems: string;
}

export const NAVIGATOR_STYLING_ATTACHED: { STYLING_PREPARED: CustomPointed } = {
    STYLING_PREPARED: {
        headed_text_logo: "flex items-center gap-[2px]",
        headed_text: "md:text-3xl text-2xl font-extrabold",
        tailed_text: "md:text-3xl text-2xl font-extrabold",
        button_radial_effect_causing_race_condition: "relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        span_tag_outlining: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-gradient-to-r from-black via-emerald-500/90 to-slate-950 transition-opacity duration-500 group-hover:opacity-40",
        inline_source: "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl",
        left_aside_sorted: 'px-12 fixed right-0 left-0 top-0 py-4 px-4 bg-white dark:bg-black/40 dark:backdrop-blur-lg z-[100] flex items-center border-b-[1px] dark:border-neutral-900 justify-between',
        absolute_structure: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block",
        list_and_listitems: 'flex items-center list-none'
    } as CustomPointed

}