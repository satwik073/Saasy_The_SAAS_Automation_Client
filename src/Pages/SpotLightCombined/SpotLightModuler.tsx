'use client'
import React, { SetStateAction } from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./Components/ui/spot_light";
import { FlipWordsDemo } from "./Animations/flickering_words";
import { Button } from "@/components/ui/button";
import { displaying_buttons } from "@/constants/data_compressed";
import { SPOT_LIGHT_PREVIEW_CONTENT_RAISED } from "./Constant";
import { SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED } from "./Constant/layout_controlling";
import { Box, Grid, Typography } from "@mui/material";
import { BOX_COMPONENTS_SEPERATED, TYPOGRAPHY_VARIANTS_SEPERATED } from "@/constants/variants_data";
import { TRANSLATING_NAVIGATION_TEXT } from "@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant";


interface ThemeController {
   [x: string]: SetStateAction<string>;
   classes_toggling_light_themes_color:string,
   classes_toggling_dark_themes_color: string
}
const themeProp: ThemeController = {
  classes_toggling_dark_themes_color: TRANSLATING_NAVIGATION_TEXT.spotlight_dark_base,
  classes_toggling_light_themes_color: TRANSLATING_NAVIGATION_TEXT.spotlight_hidden
}
export function SpotlightPreview() {
  
  const browse_components_fetched = displaying_buttons['browse_components'];
  const custom_components_fetched = displaying_buttons['custom_components'];
  const [fill_color_after_theme_change, set_color_after_theme_change] = useState(`${TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color}`);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const is_light_theme = theme === `${TRANSLATING_NAVIGATION_TEXT.drop_down_light_connecting_content}`;
    set_color_after_theme_change(is_light_theme ? themeProp.classes_toggling_light_themes_color : themeProp.classes_toggling_dark_themes_color);
  }, []);
  return (
    <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.header} className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.splot_light_main}>
      <SPOT_LIGHT_PREVIEW_CONTENT_RAISED.splot_light_effects_emerald className="-top-40 left-0 md:left-60 md:-top-20" fill_valuable_color_blend={fill_color_after_theme_change} />
      <Grid className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.grid_items_combined}>
        <Typography variant={TYPOGRAPHY_VARIANTS_SEPERATED.headings_variant.h1} className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.variant_heading_typography}><SPOT_LIGHT_PREVIEW_CONTENT_RAISED.flip_words_component_attached />
        </Typography>
        <Typography className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.variants_para_typography}>{SPOT_LIGHT_PREVIEW_CONTENT_RAISED.headline_fetched}</Typography>
        <Grid className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.buttons_parent_grid_issues}>
          <Button className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.browse_component_flexed} > {browse_components_fetched}</Button>
          <Button className={SPOTLIGHT_CUSTOM_STYLINGS_ATTACHED.custom_component_flexed}>{custom_components_fetched}</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
