'use client'
import React, { useEffect, useState } from 'react'
import { TRANSLATING_NAVIGATION_TEXT } from './Constant'
import { Box, List, ListItem } from '@mui/material'
import Link from 'next/link'
import { displaying_buttons } from '@/Constants/data_compressed'
import { CiMenuFries } from 'react-icons/ci'
import { NAVIGATOR_STYLING_ATTACHED } from './Constant/layout_controlling'
import { BOX_COMPONENTS_SEPERATED } from '@/Constants/variants_data'
import { defualt_and_defined_routes } from '@/Constants/standard_routes'

type Props = {}

const PrimaryNavigation = (props: Props) => {
 
    const dashboard_displaying_button = displaying_buttons['dashboard_classic'];
    const getting_started_displaying_button = displaying_buttons['get_started'];

    return (
        <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.section} className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.left_aside_sorted}>
           <TRANSLATING_NAVIGATION_TEXT.left_aside_navbar_product/>
            <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.nav} className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.absolute_structure}>
                <List className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.list_and_listitems}>
                    {TRANSLATING_NAVIGATION_TEXT.navigation_links_handler.map((index_reduction_value) => (
                        <ListItem key={index_reduction_value.targeted_id} className='links-fetched capitalize'><Link href={index_reduction_value.specified_path}>{index_reduction_value.route_link_name}</Link></ListItem>
                    ))}
                </List>
            </Box>
            <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.section}>
                <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.aside} className="flex items-center gap-4">
                    <TRANSLATING_NAVIGATION_TEXT.dropdown_changing_theme_component/>
                    <Link href={`${defualt_and_defined_routes.dashboard_routes}`} className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.button_radial_effect_causing_race_condition}>
                        <span className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.span_tag_outlining} /><span className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.inline_source}>{true ? (<Box component={BOX_COMPONENTS_SEPERATED.components_fetched.button}>{dashboard_displaying_button}</Box>) : (<Box component={BOX_COMPONENTS_SEPERATED.components_fetched.button}>{getting_started_displaying_button}</Box>)}
                        </span>
                    </Link>
                    <CiMenuFries className='md:hidden' />
                </Box>
            </Box>
        </Box>
    )
}

export default PrimaryNavigation
