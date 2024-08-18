import { clients } from "@/lib/constants";
import { MAIN_COMPONENT_STORAGE } from ".";
import React from "react";
import { Box } from "@mui/material";
import { BOX_COMPONENTS_SEPERATED } from "@/constants/variants_data";

interface InfiniteMovingCardsProps {
  items: { href: string; }[]; 
  className?: string;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: "slow";
}

const infinite_cards_props: InfiniteMovingCardsProps = {
  items: clients,
  className: "w-full",
  pauseOnHover: true,
  direction: 'right', 
  speed: 'slow'  
};

export default function Home() {
  return (
    <React.Fragment>
      <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.main} className="relative">
        <MAIN_COMPONENT_STORAGE.navbar_junction />
        <MAIN_COMPONENT_STORAGE.spotlight_preview />
        <MAIN_COMPONENT_STORAGE.infinite_cards {...infinite_cards_props} /> 
        <MAIN_COMPONENT_STORAGE.features_section_demo />
        <MAIN_COMPONENT_STORAGE.featured_section_demo />
        <MAIN_COMPONENT_STORAGE.card_containers />
        <MAIN_COMPONENT_STORAGE.people_engaged />
        <MAIN_COMPONENT_STORAGE.footer />
      </Box>
    </React.Fragment>
  );
}
