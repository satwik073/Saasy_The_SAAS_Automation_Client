import React from 'react'
import { translating_navigattion_text } from './Constant'
import { Box, List, ListItem } from '@mui/material'
import Link from 'next/link'
import { DisplayingButtons } from '@/constants/data_compressed'
import { CiMenuFries } from 'react-icons/ci'
import { navigator_styling_attached } from './Constant/layout'
type Props = {}

const PrimaryNavigation = (props: Props) => {
    const dashboard_displaying_button = DisplayingButtons['DashboardClassic'];
    const getting_started_displaying_button = DisplayingButtons['GetStarted'];
    return (
        <Box component={"header"} className={navigator_styling_attached.left_aside_sorted}>
            <translating_navigattion_text.left_aside_component_from_navigation/>
            <Box component={"nav"} className={navigator_styling_attached.absolute_structure}>
                <List className={navigator_styling_attached.list_and_listitems}>
                    {translating_navigattion_text.navigation_links_handler.map((index_reduction_value) => (
                        <ListItem key={index_reduction_value.targeted_id} className='links-fetched'><Link href={index_reduction_value.specified_path}>{index_reduction_value.route_link_name}</Link></ListItem>
                    ))}
                </List>
            </Box>
            <Box component={"section"}><Box  component={"aside"} className="flex items-center gap-4">
                <Link href="/dashboard" className={navigator_styling_attached.button_radial_effect_causing_race_condition}>
                    <span className={navigator_styling_attached.span_tag_outlining} />
                    <span className={navigator_styling_attached.inline_source}>
                        {true ? (
                            <Box>{dashboard_displaying_button}</Box>
                        ) : (
                            <Box>{getting_started_displaying_button}</Box>
                        )}
                    </span>
                </Link>
              <CiMenuFries className='md:hidden'/>
            </Box>
        </Box>
        </Box>
    )
}

export default PrimaryNavigation