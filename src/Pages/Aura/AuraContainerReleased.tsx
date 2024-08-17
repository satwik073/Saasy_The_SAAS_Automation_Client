"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./Components/ui/aura_background";
import { typography_variants_seperated } from "@/constants/variants_data";
import { Button, Typography } from "@mui/material";
import { spot_light_preview_content_raised } from "../SpotLightCombined/Constant";
import { spotlight_custom_stylings_attached } from "../SpotLightCombined/Constant/layout_controlling";
import { displaying_buttons } from "@/constants/data_compressed";
import { AURA_SIMULATION_TEXT } from "./Constants";

export function AuroraBackgroundDemo() {
    const browse_components_fetched = displaying_buttons['debugging_concept'];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
         <Typography variant={typography_variants_seperated.headings_variant.h1} className="text-4xl md:text-7xl text-left font-extrabold mb-3 relative  dark:text-white text-black max-w-4xl">{AURA_SIMULATION_TEXT.SECTIONS.heading_intro}
        </Typography>
        <Typography className={`relative text-sm sm:text-xl max-w-xl text-zinc-500 dark:text-zinc-300 text-center tracking-wide mb-8  antialiased leading-loose`}>{AURA_SIMULATION_TEXT.SECTIONS.welcome_text_subtitle}</Typography>
        <Button className={`bg-slate-900 dark:bg-white  dark:text-black no-underline flex space-x-2 group cursor-pointer relative  shadow-zinc-900 p-px font-semibold capitalize text-white px-4 py-2 w-full sm:w-52 h-14 rounded-2xl text-sm text-center items-center justify-center` } > {browse_components_fetched}</Button>
      </motion.div>
    </AuroraBackground>
  );
}
