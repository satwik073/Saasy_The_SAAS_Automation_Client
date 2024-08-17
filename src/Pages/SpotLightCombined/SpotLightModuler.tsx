'use client'
import React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./Components/ui/spot_light";
import { FlipWordsDemo } from "./Animations/flickering_words";
import { Button } from "@/components/ui/button";
import { displaying_buttons } from "@/constants/data_compressed";
import { spot_light_preview_content_raised } from "./Constant";
import { spotlight_custom_stylings_attached } from "./Constant/layout_controlling";
import { Box, Grid, Typography } from "@mui/material";
import { box_component_seperated, typography_variants_seperated } from "@/constants/variants_data";
import { translating_navigattion_text } from "@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant";

export function SpotlightPreview() {
  const browse_components_fetched = displaying_buttons['browse_components'];
  const custom_components_fetched = displaying_buttons['custom_components'];
  const [fill_color_after_theme_change, set_color_after_theme_change] = useState(`${translating_navigattion_text.web_page_current_dark_theme_color}`);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const is_light_theme = theme === `${translating_navigattion_text.drop_down_light_connecting_content}`;
    set_color_after_theme_change(is_light_theme ? '#FFF' : '#10B981');
  }, []);
  return (
    <Box component={box_component_seperated.components_fetched.header} className={spotlight_custom_stylings_attached.splot_light_main}>
      <spot_light_preview_content_raised.splot_light_effects_emerald className="-top-40 left-0 md:left-60 md:-top-20" fill_valuable_color_blend={fill_color_after_theme_change} />
      <Grid className={spotlight_custom_stylings_attached.grid_items_combined}>
        <Typography variant={typography_variants_seperated.headings_variant.h1} className={spotlight_custom_stylings_attached.variant_heading_typography}><spot_light_preview_content_raised.flip_words_component_attached />
        </Typography>
        <Typography className={spotlight_custom_stylings_attached.variants_para_typography}>{spot_light_preview_content_raised.headline_fetched}</Typography>
        <Grid className={spotlight_custom_stylings_attached.buttons_parent_grid_issues}>
          <Button className={spotlight_custom_stylings_attached.browse_component_flexed} > {browse_components_fetched}</Button>
          <Button className={spotlight_custom_stylings_attached.custom_component_flexed}>{custom_components_fetched}</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
