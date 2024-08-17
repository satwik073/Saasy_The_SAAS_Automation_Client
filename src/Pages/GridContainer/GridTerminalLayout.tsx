"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid , BentoGridItem } from "./Animations/grid_design";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { box_component_seperated, typography_variants_seperated } from "@/constants/variants_data";
import { Box, Grid, Typography } from "@mui/material";
import { GRID_CONSTANTS } from "./Constants";
import { GRID_TRANSFORM } from "./Constants/layout_controlling";
import { GlobeDemo } from "./Animations/globe_fetched";
import { MacbookScroll } from "@/animations/macbook-scroll";
import Switcher5 from "./Components/GridContent/TogglingSwitches";

const customTexts = [
  "Automate Google Drive tasks",
  "Sync Notion databases",
  "Manage Discord channels",
  "Automate Slack messages",
  "Schedule recurring tasks",
  "Track project progress",
  "Integrate with CRM systems",
  "Generate reports automatically",
];
const alternatingTextColors = ['text-black', 'text-white'];
const alternatingBackgrounds = ['bg-neutral-100', 'bg-black'];
export function BentoGridDemo() {
  return (
    <div className="">
    <BentoGrid className=" mx-auto md:mt-40  gap-3">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(  item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
   <div></div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <div className="relative w-[375px] h-[667px] mx-auto mt-10 border border-gray-300 rounded-3xl shadow-lg overflow-hidden">
    {/* iPhone frame */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="flex flex-1 w-full h-full min-h-[36rem] flex-col space-y-2 p-4"
        >
          {customTexts.map((text, i) => (
            <motion.div
              key={"skelenton-two" + i}
              variants={variants}
              style={{
                maxWidth: Math.random() * (100 - 40) + 40 + "%",
              }}
              className={`flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-full h-4 ${alternatingBackgrounds[i % 2]} ${alternatingTextColors[i % 2]}`}
            >
              <span className="text-sm">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    {/* Simulated iPhone top notch */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-300 rounded-full mt-3"></div>
  </div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <Box component={box_component_seperated.components_fetched.header}>
  <Grid container spacing={2} className="-mt-[6rem]">
    {GRID_CONSTANTS.SECTIONS.LLM_content_displaying.map((data_fetched, indexed_value) => (
      <Grid item key={indexed_value} className="flex w-full bg-black justify-center   shadow-2xl">
        <Grid container alignItems="center" spacing={1} className="w-full p-2">
          <Grid item xs={8} className="text-xs flex">
          <Grid className="text-white dark:text-muted-dark text-xs shadow-aceternity dark:bg-neutral-700 px-1 py-0.5 rounded-md">  {data_fetched.LLM_name}</Grid>
            <Grid item xs={4} className="text-xs text-right">
            {data_fetched.dates_mentioned}
          </Grid>
          </Grid>
         
        </Grid>
        <Grid className="px-6">

        <Switcher5/>
        </Grid>
      </Grid>
    ))}
  </Grid>
</Box>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      
      className="flex flex-1 w-full h-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div
        className="flex flex-row rounded-2xl items-start space-x-2"
      >
        <GlobeDemo/>
       
      </div>
  
    </div>
  );
};
const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2 h-[30rem]",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 h-[30rem] mb-[20rem]",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },


];
