'use client'

import Link from 'next/link'
import { AsyncLocalStorage } from 'async_hooks'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TooltipTrigger, Tooltip, TooltipContent, TooltipProvider } from '../../GlobalToolTips/TooltipContent'
import { menuOptions } from '@/constants'
import clsx from 'clsx'
import { Separator } from '@/Globals/GlobalToolTips/Seperator/SeperatorContainer'
import { Cross, Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import DropdownMenuComponent from '@/Globals/GlobalSiteNavigation/Components/DropdownMenu'
import { TRANSLATING_NAVIGATION_TEXT } from '@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant'
import { FaBolt } from 'react-icons/fa'
import { Box, Button, List, ListItem, Typography, useMediaQuery } from '@mui/material'
import { MENU_OPTIONS_CREATED } from '../Constants/layout_controlling'
import { BOX_COMPONENTS_SEPERATED, TYPOGRAPHY_VARIANTS_SEPERATED } from '@/constants/variants_data'
import { MENU_OPTIONS_SCREEN_CONTENT } from '../Constants'
import { extended_classes } from '@/constants/use_common_styling'
import { defualt_and_defined_routes } from '@/constants/standard_routes'
interface ImageContainerAttributes {
  width: number;
  height: number;
  alt: string;
  src: string;
  className?: string;
}

type Props = {
  is_drawer_open_success?: boolean;
  on_close_drawer?: () => void;
}
const MenuOptions: React.FC<Props> = ({ is_drawer_open_success, on_close_drawer }) => {
  const is_small_screen_area = useMediaQuery(`${extended_classes.media_queries.mobile_devices_below_600px}`);
  const [fill_transition_color, set_transition_fill_color] = useState<string>('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      set_transition_fill_color(
        theme === TRANSLATING_NAVIGATION_TEXT.drop_down_light_connecting_content
          ? ''
          : TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color
      );
    }
  }, []);
  const path_name_specified = usePathname()
  return (
    <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.nav}
      className={clsx(
        MENU_OPTIONS_CREATED.FLEXED_CONTAINERS.sidebar_overall_content,
        {
          [MENU_OPTIONS_CREATED.FLEXED_CONTAINERS.equilant_to_sidebar]: !is_small_screen_area,
          [MENU_OPTIONS_CREATED.FLEXED_CONTAINERS.ternary_operating_container]: is_small_screen_area && is_drawer_open_success,
          [extended_classes.hiding_element]: is_small_screen_area && !is_drawer_open_success,
        }
      )}
    >

      <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.section} className="flex flex-col items-center gap-8">
        {is_small_screen_area && is_drawer_open_success && (
          <Button onClick={on_close_drawer} className="self-end text-white">
            <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.drawer_exit_enabled />
          </Button>
        )}
        <Link href={`${defualt_and_defined_routes.default_ciphers}`} className="font-bold block text-center">
          <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.logo_icon_setteled size={24} className="dark:text-white text-black" />
        </Link>
        <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_provider>
          <List className="flex flex-col items-center gap-7">
            {menuOptions.map((menu_items_controller) => (
              <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_wrapper key={menu_items_controller.naming_determined} delayDuration={0}>
                <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_trigger>
                  <ListItem className={extended_classes.block_element}>
                    <Link
                      href={menu_items_controller.href_routes_enabled}
                      className={clsx("hover:text-primary transition-colors", {
                        [extended_classes.primary_textures]: path_name_specified === menu_items_controller.href_routes_enabled,
                      })}
                    >
                      <Box className="text-sm">
                        <menu_items_controller.Component size={22} fontWeight={'bold'} />
                      </Box>
                    </Link>
                  </ListItem>
                </MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_trigger>
                <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_content
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <Typography variant={TYPOGRAPHY_VARIANTS_SEPERATED.body_variant.body1}>{menu_items_controller.naming_determined}</Typography>
                </MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_content>
              </MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_wrapper>
            ))}
          </List>
        </MENU_OPTIONS_SCREEN_CONTENT.CONTENT.tool_tip_provider>
        <MENU_OPTIONS_SCREEN_CONTENT.CONTENT.seperator_aligned />
        <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.section} className="flex flex-col items-center gap-4 dark:bg-[#ffffff6e] py-3 px-2 rounded-full h-full overflow-scroll border-[1px] w-12">
          {[MENU_OPTIONS_SCREEN_CONTENT.CONTENT.lucid_pointer_click, MENU_OPTIONS_SCREEN_CONTENT.CONTENT.git_branch_aligned, MENU_OPTIONS_SCREEN_CONTENT.CONTENT.database_defined, MENU_OPTIONS_SCREEN_CONTENT.CONTENT.git_branch_aligned].map(
            (Icon_Originated, indexed_value) => (
              <Box
                key={indexed_value}
                className="relative block dark:bg-black p-2 rounded-full border-[1px] dark:border-t-[#353346] dark:border-t-[2px]"
              >
                <Icon_Originated className="text-muted-foreground" size={10} />
                <Box
                  className={`border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform -translate-x-1/2 -bottom-[30px] ${indexed_value % 2 === 0 ? `${extended_classes.block_element}` : `${extended_classes.hiding_element}`
                    }`}
                />
              </Box>
            )
          )}
        </Box>
        <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.default} className="flex flex-col items-center gap-2">
          <DropdownMenuComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuOptions;

function set_transition_fill_color(arg0: string) {
  throw new Error('Function not implemented.')
}
