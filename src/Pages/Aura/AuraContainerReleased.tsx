"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./Components/ui/aura_background";
import { typography_variants_seperated } from "@/constants/variants_data";
import { Button, Typography } from "@mui/material";
import { spot_light_preview_content_raised } from "../SpotLightCombined/Constant";
import { spotlight_custom_stylings_attached } from "../SpotLightCombined/Constant/layout_controlling";
import { displaying_buttons } from "@/constants/data_compressed";

export function AuroraBackgroundDemo() {
    const browse_components_fetched = displaying_buttons['browse_components'];
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
         <Typography variant={typography_variants_seperated.headings_variant.h1} className={spotlight_custom_stylings_attached.variant_heading_typography}><spot_light_preview_content_raised.flip_words_component_attached />
        </Typography>
        <Typography className={spotlight_custom_stylings_attached.variants_para_typography}>{spot_light_preview_content_raised.headline_fetched}</Typography>
        <Button className={`${spotlight_custom_stylings_attached.browse_component_flexed},  capitalize` } > {browse_components_fetched}</Button>
      </motion.div>
    </AuroraBackground>
  );
}
