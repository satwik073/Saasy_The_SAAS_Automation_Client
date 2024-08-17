'use client'
import React, { useEffect, useState } from 'react'
import { translating_navigattion_text } from './Constant'
import { Box, List, ListItem } from '@mui/material'
import Link from 'next/link'
import { displaying_buttons } from '@/constants/data_compressed'
import { CiMenuFries } from 'react-icons/ci'
import { navigator_styling_attached } from './Constant/layout_controlling'
import SaaSyAutomaiton from './SaaSyAutoSeperated/SaaSyAutomaiton'
import { box_component_seperated } from '@/constants/variants_data'

type Props = {}

const PrimaryNavigation = (props: Props) => {
 
    const dashboard_displaying_button = displaying_buttons['dashboard_classic'];
    const getting_started_displaying_button = displaying_buttons['get_started'];

    return (
        <Box component={box_component_seperated.components_fetched.section} className={navigator_styling_attached.left_aside_sorted}>
            <SaaSyAutomaiton />
            <Box component={box_component_seperated.components_fetched.nav} className={navigator_styling_attached.absolute_structure}>
                <List className={navigator_styling_attached.list_and_listitems}>
                    {translating_navigattion_text.navigation_links_handler.map((index_reduction_value) => (
                        <ListItem key={index_reduction_value.targeted_id} className='links-fetched'><Link href={index_reduction_value.specified_path}>{index_reduction_value.route_link_name}</Link></ListItem>
                    ))}
                </List>
            </Box>
            <Box component={box_component_seperated.components_fetched.section}>
                <Box component={box_component_seperated.components_fetched.aside} className="flex items-center gap-4">
                    <translating_navigattion_text.dropdown_changing_theme_component/>
                    <Link href="/dashboard" className={navigator_styling_attached.button_radial_effect_causing_race_condition}>
                        <span className={navigator_styling_attached.span_tag_outlining} /><span className={navigator_styling_attached.inline_source}>{true ? (<Box component={box_component_seperated.components_fetched.button}>{dashboard_displaying_button}</Box>) : (<Box component={box_component_seperated.components_fetched.button}>{getting_started_displaying_button}</Box>)}
                        </span>
                    </Link>
                    <CiMenuFries className='md:hidden' />
                </Box>
            </Box>
        </Box>
    )
}

export default PrimaryNavigation
